const connect = require("connect");
const app = connect();
app.listen(3000);
app.use(helloWorld);

function helloWorld(req, res, next){
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, World!</h1>");
}

console.log("Servidor escutando em http://localhost:3000");