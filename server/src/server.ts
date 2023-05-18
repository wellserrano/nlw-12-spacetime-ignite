<<<<<<< HEAD
import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
=======
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
>>>>>>> 7a56d27 (Aula 01)
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
