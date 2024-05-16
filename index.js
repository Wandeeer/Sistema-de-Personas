import usuarios from "./routes/usuarios.js";

import express from "express";
const app = express();
const port = 5000;

app.use(express.static("public"));

// Vistas
app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", usuarios);

app.listen(port, () => {
  console.log(`El puerto se abrio correctamente en ${port}...`);
});
