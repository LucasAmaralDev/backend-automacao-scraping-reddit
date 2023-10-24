const { Router } = require('express');

const postsController = require('./controller/Post-Controller')




const routes = Router();

//Adicionar novo Post

routes.post('/posts/add', postsController.adicionarPost);
routes.get('/posts/findAll', postsController.buscarPosts)


module.exports = { routes };
