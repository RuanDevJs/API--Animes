const GameplaysRepositories = require("../../Repositories/Gaemplays/GameplaysRepositories");

class GameplaysController {
    async index(req, res){

    }
    async show(req, res){
        const { id } = req.params;

        const rows = await GameplaysRepositories.findById({id});
        if(rows.length){
            res.status(200).json(rows);
        }else{
            res.status(404).json({error: "Not found"});
        }

    }
    store(){

    }
    update(){

    }
    delete(){

    }
}

module.exports = new GameplaysController();
