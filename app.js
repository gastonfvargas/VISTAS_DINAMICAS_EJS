const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

/*----------------------CONFIGURACIONES*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

/*----------------------MIDDLEWARE*/
app.use(express.static("public"));

/*----------------------RUTAS */
const otherRoutes = require("./routes/other.routes");
const menuRoutes = require("./routes/menu.routes");

/*----------------------ENRUTADORES*/
app.use("/",otherRoutes);
app.use("/menu", menuRoutes);

/*----------------------SERVIDOR */
app.listen(port, () => console.log(`http://localhost:${port}`));