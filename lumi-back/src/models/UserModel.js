const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    userFirstName: { type: String, default: "" },
    userLastName: { type: String, default: "" },
    userEmail: { type: String, default: "" },
    userPassword: { type: String, default: "" },
    userCPF: { type: String, default: "" },
    userDTNasc: { type: String, default: "" },
    userPhone: { type: String, default: "" },
    toggleButton: { type: String, default: "false" },
    userServico: { type: String, default: "" },
    userServDescricao: { type: String, default: "" },
    userServModalidade: { type: String, default: "" },
    userCity: { type: String, default: "" },
    userState: { type: String, default: "" },
}, {
    timestamps: true
});

//Criação e criptografia de senha

DataSchema.pre('save', function (next) {
    if (!this.isModified("userPassword")) {
        return next();
    }

    this.userPassword = bcrypt.hashSync(this.userPassword, 10);
    next();

});

//Atualização e criptografia de senha

DataSchema.pre('findAndUpdate', async function (next) {
    var password = this.getUpdate().userPassword + '';
    if (password.length < 55) {
        this.getUpdate().userPassword = await bcrypt.hashSync(password, 10);
    }
    next();
});

//Atualização e criptografia de senha

DataSchema.pre('findOneAndUpdate', async function (next) {
    var password = this.getUpdate().userPassword + '';
    if (password.length < 55) {
        this.getUpdate().userPassword = await bcrypt.hashSync(password, 10);
    }
    next();
});

const users = mongoose.model('User', DataSchema);
module.exports = users;
