const User = require('../controller/UserController')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
module.exports = {

    //Autenticação de senha

    async autenticarLogin(req, res) {
        const userEmail = req.body.userEmail;
        const userPassword = req.body.userPassword;
        const findUser = await User.autenticacaoLogin({ userEmail, userPassword });

        if (findUser) {
            return res.status(202).json({ ...findUser });
        }
        return res.status(203).json({ msg: "Usuário não encontrado" });
    },

    //Alteração da senha

    async mudarSenha(req, res) {
        const _id = req.id;
        const userOldPassword = req.body.userOldPassword;
        const userNewPassword = req.body.userNewPassword;
        const findUser = await User.autenticarUserLogado({ _id, userOldPassword }, res);
        if (findUser.user) {
            const update = await User.updatePassword({ body: { userNewPassword, _id: _id } }, res)
            return update
        }
        return res.status(203).json({ msg: "Erro alterar a senha" });
    },

    //Autenticação se o usuário está logado

    async isUserLog(req, res) {
        const _id = req._id;
        const findUser = await User.dataUser({ _id }, res);
        if (findUser) {
            return res.status(202).json({ ...findUser });
        }
        return res.status(203).json({ msg: "Usuário não encontrado" });
    },

}