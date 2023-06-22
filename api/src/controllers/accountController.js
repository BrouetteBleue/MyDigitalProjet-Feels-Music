const { PrismaClient } = require('@prisma/client');
const { apiResponse } = require('../config/utils');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
    const body = req.body;

    if (!body.email || !body.password || !body.pseudo) {
        return apiResponse(res, 401, 'Veuillez remplir tout les champs.');
    } 
    
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(body.pseudo) || !alphanumericRegex.test(body.password)) {
        return apiResponse(res, 401, 'Les champs doivent contenir uniquement des caractères alphanumériques.');
    }
    
    const pseudoExists = await prisma.account.findUnique({ where: { pseudo: body.pseudo } });
    if (pseudoExists) {
        return apiResponse(res, 401, "Ce pseudo est déjà utilisé.");
    }
   
    const emailExists = await prisma.account.findUnique({ where: { email: body.email } });
    if (emailExists) {
        return apiResponse(res, 401, "Cette adresse email est déjà attribuée à un compte.");
    }

    if (body.password !== body.passwordConfirm) {
        return apiResponse(res, 401, 'Les mots de passe ne sont pas identiques.');
    }
    

    try {
        const user = await prisma.account.create({
            data: {
                email: body.email,
                password: body.password,
                pseudo: body.pseudo,
            },
        });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, { expiresIn: '1h' });

         // Définir un cookie avec le token JWT
         res.cookie('token', token, {
            httpOnly: true, // Le cookie ne sera pas accessible via JavaScript côté client
            secure: true, // Le cookie sera envoyé uniquement via HTTPS
            sameSite: 'strict' // Restriction CSRF
        });

        apiResponse(res, 201, 'User created', { user, token });
    } catch (error) {
        apiResponse(res, 500, "Couldn't create user");
    }
};


exports.login = async (req, res) => {
    try {
        const body = req.body;

        const user = await prisma.account.findFirst({
            where: {
                email: body.email,   
                password: body.password          
            },
        })
    
        if (user) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY , { expiresIn: '1h' });
    
             // Définir un cookie avec le token JWT
             res.cookie('token', token, {
                httpOnly: true, // Le cookie ne sera pas accessible via JavaScript côté client
                secure: true, // Le cookie sera envoyé uniquement via HTTPS
                sameSite: 'strict' // Restriction CSRF
            });

                apiResponse(res, 201, 'OK', { user, token });
            }else{
                apiResponse(res, 404, "Aucun compte ne correspond à ces identifiants.");
            }

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la tentative de connexion.');
    }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    // Vérifier si l'ID de l'utilisateur est fourni
    if (!userId) {
        return apiResponse(res, 400, "L'ID de l'utilisateur est requis.");
    }

    try {
        // Récupérer l'utilisateur de la base de données par son ID
        const user = await prisma.account.findUnique({
            where: { id: parseInt(userId) }, // Assurez-vous que l'ID est un nombre entier si vous utilisez un identifiant numérique
        });

        // Si l'utilisateur n'est pas trouvé
        if (!user) {
            return apiResponse(res, 404, 'Utilisateur non trouvé.');
        }

        // Répondre avec les informations de l'utilisateur
        apiResponse(res, 200, 'Informations de l’utilisateur récupérées avec succès.', { user });

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des informations de l’utilisateur.');
    }
};

exports.getUserByUsername = async (req, res) => {
    const username = req.params.username;

    // Vérifier si le nom d'utilisateur est fourni
    if (!username) {
        return apiResponse(res, 400, "Le nom d'utilisateur est requis.");
    }

    try {
        // Récupérer l'utilisateur de la base de données par son nom d'utilisateur
        const user = await prisma.account.findMany({

            include: {
                _count: {
                  select: { production: true },
                },
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
                        price: true  },
                },
              },

            where: { pseudo: username }, // J'assume que le nom d'utilisateur est stocké dans une colonne appelée "pseudo"
        });


        const usersWithProductionCount = user.map(user => ({
            id: user.id,
            pseudo: user.pseudo,
            email: user.email,
            country: user.country,
            avatar: user.avatar,
            instagrom: user.insta,
            openToWork: user.open_to_work,
            phone: user.phone,
            productionsCount: user._count.production,
            productions: user.production.map(prod => ({
                id: prod.id,
                title: prod.title,
                category: prod.category.name,
                style: prod.style.name,
                price: prod.price
            })),
        }));

        // Si l'utilisateur n'est pas trouvé
        if (!user) {
            return apiResponse(res, 404, 'Utilisateur non trouvé.');
        }

        // Répondre avec les informations de l'utilisateur
        apiResponse(res, 200, 'Informations de l’utilisateur récupérées avec succès.', { user: usersWithProductionCount[0] });

    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des informations de l’utilisateur.');
    }
};

exports.getBeatmakers = async (req, res) => {

    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const prismaOptions= {
            where: {
                production: {
                    some: {}
                }
            },
            include: {
                _count: {
                  select: { production: true },
                },
              },
            take: limit,
        }

        const users = await prisma.account.findMany(prismaOptions);
        

        const usersWithProductionCount = users.map(user => ({
            id: user.id,
            pseudo: user.pseudo,
            country: user.country,
            avatar: user.avatar,
            productionsCount: user._count.production,
        }));

        // Si aucun utilisateur n'est trouvé
        if (!usersWithProductionCount || usersWithProductionCount.length === 0) {
            return apiResponse(res, 404, 'Aucun utilisateur avec des productions trouvé.');
        }

        // Répondre avec les informations des utilisateurs
        apiResponse(res, 200, 'Utilisateurs avec des productions récupérés avec succès.', { users: usersWithProductionCount });


    } catch (error) {
        // Journalisation de l'erreur pour le débogage
        console.error(error);

        // Répondre avec une erreur interne du serveur
        apiResponse(res, 500, 'Une erreur est survenue lors de la récupération des utilisateurs avec des productions.');
    }
};