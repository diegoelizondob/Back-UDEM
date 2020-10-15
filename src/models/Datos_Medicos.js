const DB = require("../database/connection")
const Sequelize = require('sequelize')

const Datos_Medicos = DB.define('datos_medicos', {
    numero_poliza: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    vigencia_poliza: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    telefono_aseguradora: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    condiciones_aseguradora: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    nombre_contacto_emergencia: {
        type: Sequelize.STRING(60),
        allowNull: true
    },
    telefono_contacto_emergencia: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    enfermedades: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    medicamentos: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    cirugias_previas: {
        type: Sequelize.STRING(50),
        allowNull: true
    }
})

module.exports = Datos_Medicos