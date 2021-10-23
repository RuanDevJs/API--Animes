const UserController = require("./Controllers/User/UserController");
const { Router } = require("express");
const login = require("./Middleware/login");
const GameplaysController = require("./Controllers/Gameplays/GameplaysController");

const routes = Router();

/************* Users *************/
routes.get("/user", login, UserController.index);
routes.get("/user/:id", login, UserController.find);
routes.post("/user", UserController.store);
routes.put("/user/:id", login, UserController.update);
routes.delete("/user/:id", login, UserController.delete);
routes.post("/login", UserController.login);
routes.get("/validate-token", login, (req, res) => {
    res.json({sucess: "Token Válido"})
});

module.exports = routes;
