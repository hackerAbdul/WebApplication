//Holds the server location and the port its being displayed on

const server = require('./app');

const port = process.env.PORT || 2000

//localhost:2000
server.listen(port, () => {
    console.log(`Server is listening on port %d` , port)
});

module.exports = server;