const UsersRepositories = require("../../Repositories/User/UsersRepositories");
const jwt = require("jsonwebtoken");

class UserController {
   async index(req, res){
        const rows = await UsersRepositories.findAll();
        if(rows.length){
            return res.status(200).json(rows);
        }
    }

    async find(req, res){
        const {id} = req.params;
        const [rows] = await UsersRepositories.findById({id});
        if(rows.id){
            return res.status(200).json(rows);
        }else{
            return res.status(404);
        }
    }

    async login(req, res){
        const {name, password} = req.body;
        const [login] = await UsersRepositories.login({name, password});

        if(login){
            const token = jwt.sign({
                id: login.id,
                name: login.name,
                password: login.password
            }, "secret_key", {
                expiresIn: "1h"
            });
            return res.json({token: token, data: login});
        }else{
            return res.json({error: "Name or passowrd is wrong"})
        }
    }

   async store(req, res){
        const {name, password} = req.body;
        const findByName = await UsersRepositories.findByName({name});
        if(findByName.length){
            return res.json({error: "This user is already exists"});
        }else{
           const [createUser] = await UsersRepositories.create({name, password});
           const token = jwt.sign({
               id: createUser.id,
               name: createUser.name,
               password: createUser.password
           }, "secret_key",{
               expiresIn: "1h"
           })
           return res.json({token: token, data: createUser});
        }
    }

   async update(req, res){
    const {id} = req.params;
    const {name, password, img_perfil} = req.body;
        const findById = await UsersRepositories.findById({id});
        if(findById.length){
            const [createUser] = await UsersRepositories.update({name, password, img_perfil}, id);
            res.json(createUser);
        }else{
         return res.json({error: "This user is not exists"});
        }
    }

    async delete(req, res){
        const {id} = req.params;
        const findByName = await UsersRepositories.findById({id});
        if(findByName.length){
            await UsersRepositories.delete({id});
            res.status(204).json('');
        }else{
         return res.json({error: "This user is not exists"});
        }
    }
}

module.exports = new UserController();
