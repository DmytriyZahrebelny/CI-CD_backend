import Fastify, { FastifyInstance } from 'fastify';

const fastify: FastifyInstance = Fastify({
	logger: true,
});

fastify.get('/', function (request, reply) {
	reply.send({ hello: 'world' });
});

fastify.listen({ port: 3000 }, function (err) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
