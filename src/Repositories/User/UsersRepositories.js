const {Query} = require("../../DB/db");

class UsersRepositories {
    async findByName({name}){
        try{
            const {rows} = await Query(`
                SELECT * FROM users
                WHERE name = $1
            `, [name]);
            return rows;
        }catch{
            return {error: "Error"};
        }
    }

    async findAll(){
        try{
            const {rows} = await Query("SELECT users.name, users.img_perfil FROM users");
            return rows;
        }catch{
            return {error: "Erro"}
        }
    }

    async findById({id}){
        try{
            const {rows} = await Query("SELECT * FROM users WHERE id = $1", [id]);
            return rows;
        }catch{
            return {error: "user not found"}
        }
    }

    async create({name, password}){
        try{
            const {rows} = await Query(`
                INSERT INTO users(name, password)
                VALUES($1, $2)
                RETURNING *
            `, [name, password]);
            return rows;
        }
        catch(error){
            return {error: "We can't register your account!"};
        }
    }

    async update({name, password, img_perfil}, id){
        try{
            const {rows} = await Query(`
                UPDATE users
                SET name = $1, password = $2, img_perfil = $3
                WHERE id = $4
                RETURNING *
            `, [name, password, img_perfil, id]);
            return rows;
        }
        catch(error){
            return {error: "We can't register your account!"};
        }
    }

    async delete({id}){
        try{
            const {rows} = await Query("DELETE FROM users WHERE id = $1", [id]);
            return rows;
        }catch{
            return {error: "Erro"}
        }
    }

    async login({name, password}){
        try{
            const {rows} = await Query(`
                SELECT * FROM users
                WHERE name = $1 AND password = $2
            `, [name, password]);
            return rows;
        }catch{
            return {error: "Erro"}
        }
    }
}

module.exports = new UsersRepositories();
