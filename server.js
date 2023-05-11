const express = require('express')
const app = express();

app.use(express.static(`${__dirname}`))

app.listen(4001, () => console.log("Listening on Port 4000"))