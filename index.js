const connect = require("connect");
const morgan = require("morgan");
const serveStatic = require("serve-static");

const app = connect();
app.listen(3000);
app.use(logger);
app.use(morgan("short"));
app.use(serveStatic("./public"));
app.use("/hello.html", helloWorld);
app.use("/bye.html", byeWorld);
app.use("/index.html", index);


console.log("Servidor escutando em http://localhost:3000");

function index(req, res, next){
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.write("<link rel=stylesheet href=estilo.css />");
    res.end(`
    <h1>Olá, seja bem vindo a Atividade 4 da disciplina DCC195!</h1>
    <ul>
        <li><a href="./sobre.html">Sobre</a></li>
        <li><a href="./techs.html">Techs</a></li>
    </ul>            
    `);
}

function helloWorld(req, res, next){
    res.setHeader("Content-Type", "text/html");
    res.write("<link rel=stylesheet href=estilo.css />");
    res.end("<h1>Hello, World!</h1>");
}

function byeWorld(req, res, next){
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Bye, World!</h1>");
}

function logger(req, res, next){
    console.log("Nova requisição!\n", req.url);

    next();
}