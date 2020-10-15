module.exports = (db, Sequelize) => {
    return db.define('Deportistas', {
        matricula: {
            type: Sequelize.STRING(20),
            primaryKey: true,
            allowNull: false
        },
        nombres_deportista: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        apellido_paterno: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        apellido_materno: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        fecha_nacimiento: {
            type: Sequelize.DATEONLY
        },
        fecha_inicio_programa: {
            type: Sequelize.DATEONLY
        },
        altura: {
            type: Sequelize.FLOAT
        },
        peso_kg: {
            type: Sequelize.FLOAT
        },
        numero: {
            type: Sequelize.TINYINT,
            unique: true
        },
        celular: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        correo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        talla_camisa: {
            type: Sequelize.STRING(3)
        },
        talla_short: {
            type: Sequelize.STRING(3)
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
};
