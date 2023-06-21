const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');

const prisma = new PrismaClient();

exports.createComment = async (req, res) => {
    try {
        const { productionId, message } = req.body;
        const userId = req.user.userId;

        const newComment = await prisma.comment.create({
            data: {
                account_id: userId,
                production_id: productionId,
                message: message
            }
        });

        apiResponse(res, 201, 'Commentaire créé avec succès', newComment);

    } catch (error) {

        console.error(error);


        apiResponse(res, 500, 'Une erreur est survenue lors de la création du commentaire.');
    }
};

exports.getCommentsByProduction = async (req, res) => {
    try {
        // Récupérez l'ID de production depuis les paramètres de l'URL
        const productionId = parseInt(req.params.productionId, 10);

        // Récupérez les commentaires de la base de données
        const comments = await prisma.comment.findMany({
            where: {
                production_id: productionId
            },
            include: {
                account: {
                    select: {
                        pseudo: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // Répondez avec succès et renvoyez les commentaires récupérés
        apiResponse(res, 200, 'Commentaires récupérés avec succès', comments);

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondez avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des commentaires.');
    }
};




