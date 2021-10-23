const { Query } = require("../../DB/db");

class GameplaysRepositories {
    async findById({id}){
        try{
            const {rows} = await Query(`
            SELECT * FROM gameplays
            WHERE user_id = $1
        `, [id]);
            return rows;
        }catch(erro){
            return {erro: "User does not exists"};
        }
    }
}

module.exports = new GameplaysRepositories();
