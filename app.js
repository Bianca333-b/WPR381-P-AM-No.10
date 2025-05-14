// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: true })); // Handles POST form data
app.use(express.static(path.join(__dirname, "public")));//Serves /css and /images, static files from the public/ folder
app.set('view engine', 'ejs');//Tells Express to use EJS as the template engine (renders .ejs files).
app.set("views", path.join(__dirname, "views"));//Sets the folder where Express looks for your .ejs templates — in views/.

app.use("/", pageRoutes);//Delegates routing logic to the external file pageRoutes.js

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
