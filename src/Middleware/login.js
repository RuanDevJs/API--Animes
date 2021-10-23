const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        let token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, 'secret_key');
        next();
    }catch(error){
        return res.status(401).send({mensagem: "Falha no token"});
    }
}
