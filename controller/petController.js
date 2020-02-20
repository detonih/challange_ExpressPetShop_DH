const { listarPets, adicionarPet, buscarPet } = require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(listarPets());
    },
    add: (req, res) => {
        const novoPet = req.params;
        
        adicionarPet(novoPet)
        res.send(`${novoPet.nome} foi adicionado`);
    },
    buscar: (req, res) => {
        const {nome} = req.params;
        
        if(buscarPet(nome).length > 0) {
            res.send(`${nome} encontrado`);

        } else {
            res.send('Nao encontrado')
        }
    }
}

module.exports = petController;