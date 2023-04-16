require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./config/routes");

const app = express();
const PORT = process.env.PORT || 4000;
const publicDir = path.join(__dirname, "public");
const viewsDir = path.join(__dirname, "app/views");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", viewsDir);
app.set("view engine", "ejs");

app.use(express.static(publicDir));

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server telah berhasil berjalan pada http://127.0.0.1:${PORT}`);
});