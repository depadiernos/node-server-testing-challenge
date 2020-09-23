const express = require("express")
const itemsRouter = require("./routes/items-router")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/items", itemsRouter)
server.get("/", (req, res) => {
  res.json({ message: "Todo API" })
})

if (!module.parent) {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

module.exports = server
