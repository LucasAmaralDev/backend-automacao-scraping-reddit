const { PostsModels } = require('../model/Post-Model');

class PostsController{

    async adicionarPost(req, res){

        try{

            //Recebe os dados do body
            const { autor, titulo, quantidade_comentarios, link_publicacao, conteudo } = req.body;

            //Verifica se todos os dados foram recebidos
            if (!autor || !titulo || !quantidade_comentarios || !link_publicacao || !conteudo){
                return res.status(400).json({
                    error: "Dados Ausentes"
                })
            }

            //Verifica se já existe um post com o mesmo titulo e autor
            const postExiste = await PostsModels.findOne({
                where:{
                    autor: autor,
                    titulo: titulo
                }
            })

            //Se existe post retorna status 401
            if (postExiste){
                return res.statua(401).json({
                    error: "Post já cadastrado!"
                })
            }

            const salvarConta = await PostsModels.create({
                autor,
                titulo,
                quantidade_comentarios,
                conteudo,
                link_publicacao,
                data_adicionado: new Date()
            })

            return res.status(200).json(salvarConta)

        }
        catch{

            return res.status(400).json({
                error: "Erro Interno do servidor"
            })
        }
    }

    async buscarPosts(req, res){

        const posts = await PostsModels.findAll({
            order: [['id', 'DESC']]
        })

        return res.json(posts)

    }
}

module.exports = new PostsController();