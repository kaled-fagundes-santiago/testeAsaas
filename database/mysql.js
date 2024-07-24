const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste_lwh0', 'kaled', 'HAnKNFUUev70qeoHfjntONorRN5z2os4', {
    host: 'dpg-cqg4pk1u0jms738akqag-a.oregon-postgres.render.com', // URL do host
    port: 5432, // Porta padrão do PostgreSQL
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Desative a verificação de certificado se estiver usando SSL
        }
    },
    logging: false, // Opcional: desativa o log SQL
});

module.exports = sequelize;
