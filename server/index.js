const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv/config");
const routes = require("./src/routes/index.js");

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v4", routes);

const port = process.env.PORT || 5000

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongodb conectado")
    server.listen(port, () => {
        console.log(`Server escutando na porta ${port}`);
    });
}).catch((err) => {
    console.log({ err });
    process.exit(1);
})