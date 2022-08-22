const express = require('express');
const router = express.Router();

const User = require('./controller/UserController');
const Auth = require('./controller/AuthController');
const checkToken = require('./middlewares/Jwt');


//rotas de autenticação
router.post('/auth/login', Auth.autenticarLogin);
router.get('/auth/check', checkToken, async (req, res) => {
    const retorno = await Auth.isUserLog({ _id: req.id }, res);
    return retorno;
});


//rotas de usuarios
router.get('/user/list', (req, res) => User.listarServicos(res));
router.post('/api/user', User.create);
router.post('/api/user/mudar-senhar', checkToken, Auth.mudarSenha);
router.delete('/api/user/', checkToken, async(req, res) =>{
    const retorno = await User.delete( req, res );
    return retorno;
})
router.put('/api/user-data', checkToken, async(req, res) =>{
    const retorno = await User.updateData( req, res );
    return retorno;
})  //Dados

//Rotas para o insomia
router.delete('/api/user-insomia/:_id', User.delete);
router.get('/api/user-search/:_id', User.searchUserId);

module.exports = router;