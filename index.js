const connect = require("connect");
const app = connect();
app.listen(3000);
app.use(logger);
app.use(helloWorld);


console.log("Servidor escutando em http://localhost:3000");

function helloWorld(req, res, next){
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, World!</h1>");
}

function logger(req, res, next){
    console.log("Nova requisição!\n");

    next();
}