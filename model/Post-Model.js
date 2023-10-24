const { DataTypes } = require('sequelize') ;

const { sequelize } = require('../database/config');

const PostsModels = sequelize.define('Posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING
    },
    quantidade_comentarios: {
        type: DataTypes.INTEGER
    },
    link_publicacao: {
        type: DataTypes.STRING
    },
    conteudo:{
        type: DataTypes.STRING
    },
    data_adicionado: {
        type: DataTypes.DATEONLY
    }
  });

  PostsModels.sync();

module.exports = { PostsModels };