const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');

const prisma = new PrismaClient();

exports.like = async (req, res) => {
    const body = req.body;

    try {
        const like = await prisma.like.create({
            data: {
                account_id: body.account,
                production_id: body.production,
            },
        });

        apiResponse(res, 201, 'Liked', { like });
    } catch (error) {
        apiResponse(res, 500, "Couldn't like production");
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