// alert("hi!");
const socket = new WebSocket(`ws://${window.location.host}`);

// 연결 성립
socket.addEventListener("open", () => {
  console.log("Connected to Server");
})

// 메시지가 전달되었을 때
socket.addEventListener("message", (message) => {
  console.log("Just got this:", message.data, "from the server"); 
})

// 서버가 오프라인이 되었을 때, 연결 해제
socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
})

setTimeout(() => {
  socket.send("hello from browser after 5s");
}, 5000); // 5000ms 뒤에 메시지 보냄