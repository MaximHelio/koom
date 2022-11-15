import express from 'express'; // 최신 자바 문법 express 서버에서 가져오기

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views"); //__dirname은 Node.js 전역변수로, 현재 실행하는 폴더의 경로를 의미

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home")); // 사용자에게 home.pug를 제공하기 위한 라우팅 설정
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);