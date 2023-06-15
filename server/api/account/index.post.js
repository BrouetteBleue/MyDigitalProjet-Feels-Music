import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email && !body.password && !body.pseudo) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Veuillez remplir tout les champs.',
    })
  }

  if (body.password !== body.passwordConfirm) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Les mots de passe ne sont pas identiques.',
    });
  }

  const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
  if (!alphanumericRegex.test(body.pseudo) || !alphanumericRegex.test(body.password)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Les champs doivent contenir uniquement des caractères alphanumériques.',
    });
  } 

  const emailExists = await prisma.account.findUnique({
    where: {
      email: body.email
    },
  })
  if (emailExists) {
    throw createError({
      statusCode: 401,
      statusMessage: "Cette adresse email est déjà attribuée à un compte.",
    });
  }

  const pseudoExists = await prisma.account.findUnique({
    where: {
      pseudo: body.pseudo
    },
  })
  if (pseudoExists) {
    throw createError({
      statusCode: 401,
      statusMessage: "Ce pseudo est déjà utilisé."
    });
  }


    return prisma.account.create({
        data: {
          email: body.email,
          password: body.password,
          pseudo: body.pseudo,
        },
      })
      .then((user) => {
       return {
          statusCode: 201,
          statusMessage: 'OK',
          body: {
            message: 'User created',
            user,
          }
        }
      })
      .catch((error) => {
        throw createError({
          statusCode: 500,
          statusMessage: error.message,
          message: "Couldn't create user"
        });
      });
});