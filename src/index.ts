import fastify from "fastify";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const server = fastify({
  logger: true,
});

server.get("/", async () => {
  return { hello: "world!" };
});

(async () => {
  try {
    await server.listen({ port, host });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
