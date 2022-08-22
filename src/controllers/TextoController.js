const Texto = require('../models/Texto');

module.exports = {
    async index(req, res) {
        const texto = await Texto.find().sort('nome');
        return res.json(texto);
    },
    async store(req, res) {
        const texto = await Texto.create(req.body);
        return res.json(texto);
    },
    async show(req, res) {
        const texto = await Texto.findById(req.params.id);
        return res.json(texto);
    },
    async update(req, res) {
        const texto = await Texto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(texto);
    },
    async destroy(req, res) {
        const texto = await Texto.findByIdAndDelete(req.params.id);
        return res.send();
    }
};