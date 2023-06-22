const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');

const prisma = new PrismaClient();

exports.like = async (req, res) => {
    const userId = req.user.userId;
    const body = req.body;

    try {
        const existingLike = await prisma.like.findFirst({
            where: {
                account_id: userId,
                production_id: body.production,
            },
        });

        // Si un "like" existe déjà, le supprimer
        if (existingLike) {
            await prisma.like.delete({
                where: { id: existingLike.id },
            });
            apiResponse(res, 200, 'Unliked', { like: null });
        } 
        // Sinon, créer un nouveau "like"
        else {
            const like = await prisma.like.create({
                data: {
                    account_id: userId,
                    production_id: body.production,
                },
            });

            console.log(like);

            apiResponse(res, 201, 'Liked', { like });
        }
    } catch (error) {
        console.error(error);
        apiResponse(res, 500, "Couldn't like or unlike production");
    }
};

exports.unlike = async (req, res) => {
    const body = req.body;

    try {
        // Trouver le "like" correspondant
        const like = await prisma.like.findFirst({
            where: {
                account_id: body.account,
                production_id: body.production,
            },
        });

        // Si un "like" est trouvé, le supprimer
        if (like) {
            await prisma.like.delete({
                where: {
                    id: like.id,
                },
            });

            apiResponse(res, 200, 'Unliked', { like });
        } else {
            apiResponse(res, 404, "Like not found");
        }
    } catch (error) {
        console.error(error);
        apiResponse(res, 500, "Couldn't unlike production");
    }
};


exports.getUserLikes = async (req, res) => {
    const userId = req.user.userId;

    // Vérifier si l'id de l'utilisateur est fourni
    if (!userId) {
        return apiResponse(res, 400, "L'id de l'utilisateur est requis.");
    }

    try {
        // Récupérer les likes de l'utilisateur de la base de données
        const likes = await prisma.like.findMany({
            where: {
                account_id: parseInt(userId)
            },
            include: {
                production: {
                    select: {
                        id: true,
                        title: true,
                        category: {
                            select: {
                                name: true
                            }
                        },
                        style: {
                            select: {
                                name: true
                            }
                        },
                        account: {
                            select: {
                                pseudo: true
                            }
                        }
                    }
                }
            }
        });

        // Transformer les données pour n'inclure que les informations nécessaires
        const userLikes = likes.map(like => ({
            production: {
                id: like.production.id,
                title: like.production.title,
                category: like.production.category.name,
                style: like.production.style.name,
            },
            beatmaker: {
                pseudo: like.production.account.pseudo
            }
        }));

        // Répondre avec les likes de l'utilisateur
        apiResponse(res, 200, 'Likes de l’utilisateur récupérés avec succès.', { userLikes });

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des likes de l’utilisateur.');
    }
};