const WebSocket = require("ws")
const wss = new WebSocket.Server({ port: 3000 })

wss.on("connection", (ws) => {
  console.log("有人连接进来了")
  // ws.on("message", (data) => {
  //   ws.send(data + "+九月九日忆山东兄弟")
  // })
  ws.on("error", () => {
    console.log("连接错误")
  })
  ws.on("close", () => {
    console.log("有人断开连接了")
  })
  ws.on("message", (e) => {
    console.log(e)
    const data = JSON.parse(e)
    console.log(data)
    switch (data.ModeCode) {
      case "message":
        console.log("收到消息" + data.msg)
        ws.send(e)
        break
      case "heart_beat":
        console.log(`收到心跳${data.msg}`)
        ws.send(e)
        break
    }
  })
})
