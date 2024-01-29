const express = require("express");
const applyMiddleware = require("./src/middleware/applyMiddleware/applyMiddleware");
const port = process.env.PORT || 4000;
const authenticationRoute = require("./src/routes/authentication/index.js");
const blogRoute = require("./src/routes/blog/index.js");
const commetRoute = require("./src/routes/comment/index.js");
const connetDb = require("./src/db/connentDb.js");

const app = express();

applyMiddleware(app);
app.use(authenticationRoute);
app.use(blogRoute);
app.use(commetRoute);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.all("*", (req, res) => {
  res.send(`The requested url invalid`);
});

const main = async () => {
  await connetDb();
  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
};

main();
