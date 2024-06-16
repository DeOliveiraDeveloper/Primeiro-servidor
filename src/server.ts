import fastify from "fastify";

const server = fastify({
    logger: true
})

server.get("/", function control (req, res) {
    const saudacao = "Bem vindo!"
    return res.send(saudacao)
})

server.listen({
    port: 3000
})