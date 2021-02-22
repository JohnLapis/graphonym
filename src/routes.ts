export default async (fastify: any, options: any) => {
    const opts = {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        graphonym: { type: 'string' }
                    }
                }
            }
        }
    }

    fastify.get("/:word", opts, async (req: any, reply: any) => {
        return {graphonym: req.params.word}
    })
}
