import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const caca = await readBody(event)

  console.log(caca)

    return {
      hello: 'world'
    }
  })