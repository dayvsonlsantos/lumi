const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {

    //Cadastro usuário
    async create(req, res) {

        const { userFirstName, userLastName, userEmail, userPassword, userCPF, userDTNasc, userPhone, toggleButton, userServico,userServDescricao, userServModalidade, userCity, userState } = req.body;
        let data = {};

        //Verificando a existência de CPF ou E-mail já registrados no banco

        let user = await User.findOne({ userEmail });
        let userVerifyCPF = await User.findOne({ userCPF });
        if (!user && !userVerifyCPF) {

            data = { userFirstName, userLastName, userEmail, userPassword, userCPF, userDTNasc, userPhone, toggleButton, userServico,userServDescricao, userServModalidade, userCity, userState };
            user = await User.create(data);

            return res.status(201).json(user);

        } else {
            return res.status(500).json(user);
        }
    },
    
    //Dados do usuário

    async dataUser(req) {
        const { _id } = req;
        const user = await User.findOne({ _id });
        if (user == null) {
            return false;
        } else {
            return { user };
        }
    },

    //Exibir usuários cadastrados como prestadores de serviço

    async listarServicos(res) {
        const user = await User.find({toggleButton: "true"});
        if (user == null) {
            return {msg: "Nenhum prestador encontrado na base de dados."};
        } else {
            return res.json({user});
        }
    },

    //Login

    async autenticacaoLogin(req) {
        const { userEmail, userPassword } = req;
        const user = await User.findOne({ userEmail });
        if (user == null) {
            return false;

        } else {
            const verificarSenha = await bcrypt.compare(userPassword, user.userPassword);
            if (verificarSenha) {
                let token = null;
                try {
                    token = jwt.sign({
                        _id: user._id,
                    },
                        process.env.SECRET,
                    );

                } catch (error) {
                    console.log(`Erro ao gerar token: ${error}`);
                }
                return { user, token };
            } else {
                return false;
            }

        }
    },

    //Apagar usuário

    async delete(req, res) {
        const { id } = req;
        const user = await User.findByIdAndDelete({ _id: id });
        if (user == null) {
            return res.status(404).json({ erro: "Erro ao deletar a conta" });
        } else {
            return res.status(202).json(user);
        }
    },

    //Verificação antes da alteração de senha

    async autenticarUserLogado(req, res) {
        const { _id, userOldPassword } = req;
        const user = await User.findOne({ _id });
        if (user == null) {
            return { statusCode: 404 };
        } else {
            const verificarSenha = await bcrypt.compare(userOldPassword, user.userPassword);
            if (verificarSenha) {
                return { statusCode: 202, user };
            } else {
                return { statusCode: 203 };
            }

        }
    },

    //Atualizar senha

    async updatePassword(req, res) {
        const _id = req.body._id;
        const userNewPassword = req.body.userNewPassword;
        const user = await User.findOneAndUpdate({ _id: _id }, { userPassword: userNewPassword }, { new: true });
        if (user == null) {
            return { erro: "Erro ao alterar a senha" };
        } else {
            return res.status(202).json(user);
        }
    },

    //Atualização dos dados

    async updateData(req, res) {
        const { _id, userFirstName, userLastName, userEmail, userCPF, userDTNasc, userPhone, toggleButton, userServico,userServDescricao, userServModalidade, userCity, userState } = req.body;
        const data = { userFirstName, userLastName, userEmail, userCPF, userDTNasc, userPhone, toggleButton, userServico,userServDescricao, userServModalidade, userCity, userState };
        const user = await User.findOneAndUpdate({ _id }, data, { new: true });
        if (user == null) {
            return res.json({ erro: "Erro ao encontrar o usuário" });
        } else {
            return res.json(user);
        }
    },
    
    //Para teste no Insomnia

    async searchUserId(req, res) {
        const { _id } = req.params;
        const user = await User.findOne({ _id });
        if (user == null) {
            return res.json({ erro: "Erro" });
        } else {
            return res.json(user);
        }
    }
}