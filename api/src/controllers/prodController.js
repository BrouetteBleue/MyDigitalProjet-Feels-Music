const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const prisma = new PrismaClient();

// Configuration de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

exports.uploadProduction = async (req, res) => {
    const productionInfo = req.body;
    const audioFile = req.files.song[0];
    const imageFile = req.files.cover[0];

    try {
        // Lire les métadonnées du fichier audio
        const metadata = await import('music-metadata').then(mm => mm.parseFile(audioFile.path));
        const duration = metadata.format.duration; // durée en secondes

        const categoryId = parseInt(productionInfo.category_id);
        const styleId = parseInt(productionInfo.style_id);

        // Créez d'abord la production dans la base de données
        const newProduction = await prisma.production.create({
            data: {
                title: productionInfo.title,
                account: {
                    connect: { id: 1 }
                },
                category: {
                    connect: { id: categoryId }
                },
                style: {
                    connect: { id: styleId }
                },
                tags: productionInfo.tags,
                price: productionInfo.price,
                length: duration.toString(),
                sound: audioFile.path, // Temporaire
                cover: imageFile.path  // Temporaire
            }
        });

        // Créez un nouveau dossier avec le nom de l'ID de la production
        const newDirectory = `uploads/${newProduction.id}`;
        if (!fs.existsSync(newDirectory)) {
            fs.mkdirSync(newDirectory);
        }

        // Déplacez les fichiers vers le nouveau dossier
        const newAudioPath = path.join(newDirectory, audioFile.originalname);
        const newImagePath = path.join(newDirectory, imageFile.originalname);
        fs.renameSync(audioFile.path, newAudioPath);
        fs.renameSync(imageFile.path, newImagePath);

        // Mettre à jour l'enregistrement de production avec les nouveaux chemins de fichiers
        await prisma.production.update({
            where: { id: newProduction.id },
            data: {
                sound: newAudioPath,
                cover: newImagePath
            }
        });

        apiResponse(res, 200, 'Fichiers uploadés et données insérées avec succès!', newProduction);

    } catch (error) {
        console.error(error);
        apiResponse(res, 500, 'Une erreur est survenue lors de l\'insertion en base de données.');
    }
};

exports.uploadMiddleware = upload.fields([{ name: 'song', maxCount: 1 }, { name: 'cover', maxCount: 1 }]);

exports.getProductionDetails = async (req, res) => {
    const productionId = req.params.prod; // Assumant que l'ID de la production est passé en tant que paramètre de requête

    try {
        // Récupérer la production de la base de données
        const production = await prisma.production.findUnique({
            where: {
                id: parseInt(productionId, 10),
            },
            include: { 
                category: {
                    select: { name: true }
                },     
                style: {
                    select: { name: true }
                },     
                comment: true,  
                account: {
                    select: { pseudo: true}
                }    
            },
        });

        // Si la production n'est pas trouvée
        if (!production) {
            return apiResponse(res, 404, 'Production non trouvée.');
        }

        // Répondre avec les détails de la production
        apiResponse(res, 200, 'Détails de la production récupérés avec succès.', { production });

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des détails de la production.');
    }
};

exports.getProductions = async (req, res) => {
    try {
        // Récupérer toutes les productions de la base de données
        const productions = await prisma.production.findMany({
            include: { 
                category: {
                    select: { name: true }
                },     
                style: {
                    select: { name: true }
                },   
                account: {
                    select: { pseudo: true, country: true}
                }    
            },
        });

        const cleanProductions = productions.map(prod => {
            return {
                id: prod.id,
                title: prod.title,
                cover: prod.cover,
                category: prod.category.name,
                style: prod.style.name,
                price: prod.price,
                length: prod.length,
                account: prod.account,
            }
        });

        // Répondre avec les détails de la production
        apiResponse(res, 200, 'Productions récupérées avec succès.', { cleanProductions });

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des productions.');
    }
}