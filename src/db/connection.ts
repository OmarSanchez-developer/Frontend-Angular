import { Sequelize } from "sequelize";

const sequelize = new Sequelize('rrhh', 'root', 'toor1485$', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;