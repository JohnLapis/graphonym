"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (fastify, options) => {
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
    };
    fastify.get("/:word", opts, async (req, reply) => {
        return { graphonym: req.params.word };
    });
};
