import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'
import { FastifyInstance } from 'fastify'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880,
      },
    })

    if (!upload) return reply.status(400).send()

    const mimetypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimetypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) return reply.status(400).send()

    const fileId = randomUUID()
    const extension = extname(upload.filename)
    const fileName = fileId.concat(extension)

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
    )

    await pump(upload.file, writeStream)
    const url = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, url).toString()

    return { fileUrl }
  })
}
