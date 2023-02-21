import Fastify from 'fastify';
import fastifystatic from '@fastify/static';
import * as path from 'path';


const fastify = Fastify();


fastify.register(fastifystatic, {
    root: path.join(__dirname, '../public')
});

fastify.get('/', async (req, reply) => {
    reply
        .code(200)
        .type('application/json');
});

fastify.get('/player_show', async (req, reply) => {
    return reply.sendFile('index.html');
});

fastify.listen({port: 8080}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
