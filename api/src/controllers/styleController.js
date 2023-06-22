const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');

const prisma = new PrismaClient();

exports.getStyles = async (req, res) => {

    try {
        const styles = await prisma.style.findMany({
            select: {
                id: true,
                name: true
            }
        });
        
        const stylesNames = styles.map(style => style.name);
        
        apiResponse(res, 200, 'OK', { styles });

    } catch (error) {
        console.error("Error fetching styles:", error);
        apiResponse(res, 500, "Une erreur est survenue au moment de récupérer les styles.");
    }

};