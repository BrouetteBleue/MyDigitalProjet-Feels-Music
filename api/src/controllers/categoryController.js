const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');

const prisma = new PrismaClient();

exports.getCategories = async (req, res) => {

    try {
        const categories = await prisma.category.findMany({
            select: {
                name: true
            }
        });
        
        const categoryNames = categories.map(category => category.name);
        
        apiResponse(res, 200, 'OK', { categoryNames });

    } catch (error) {
        console.error("Error fetching categories:", error);
        apiResponse(res, 500, "Une erreur est survenue au moment de récupérer les catégories.");
    }
        

};