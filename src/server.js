import http from "http";
import WebSocket from "ws";
import express from 'express'; // 최신 자바 문법 express 서버에서 가져오기

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views"); //__dirname은 Node.js 전역변수로, 현재 실행하는 폴더의 경로를 의미

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home")); // 사용자에게 home.pug를 제공하기 위한 라우팅 설정
app.get("/*", (req, res) => res.redirect("/")); // 홈(/)이 아닌 다른 주소로 GET요청을 보내더라도 홈으로 리다이렉션 하도록 설정

const handleListen = () => console.log("Listening on http://localhost:3000");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function handleConnection(socket){
  console.log(socket) // socket 내용이 출력되면, connection 이벤트가 발생한 것.
}

wss.on("connection", handleConnection)  // socket 확인하려면 connection 이벤트가 발생해야함

server.listen(3000, handleListen);