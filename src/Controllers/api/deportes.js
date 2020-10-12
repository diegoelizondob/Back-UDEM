const { Deporte } = require('../../database/database');
const { validationResult } = require('express-validator');

exports.get_all = async (req, res) => {
    const deportes = await Deporte.findAll();
    res.json(deportes);
};

exports.get_by_id = async (req, res) => {
    const deporte = await Deporte.findByPk(req.params.deporteId);
    res.json(deporte);
};

exports.create = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors });
    }
    const deporte = await Deporte.create(req.body);
    res.json(deporte);
};

exports.update = async (req, res) => {
    await Deporte.update(req.body, {
        where: { id_deporte: req.params.deporteId}
    });
    const deporte = await Deporte.findByPk(req.params.deporteId);
    res.json({ success: "modificado correctamente", deporte });
};

exports.destroy = async (req, res) =>{
    await Deporte.destroy({
        where: { id_deporte: req.params.deporteId}
    });
    res.json({ succes: "Se ha eliminado el deporte" });;
};