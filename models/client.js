const {Schema, model} = require('mongoose')

const ClientSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Name is required']
    },
    apellido: {
        type: String,
        required: [true, 'Apellido is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    telefono: {
        type: Number,
        required: [true, 'Telefono is required']
    },
    cuilcuit: {
        type: Number,
        required: [true, 'Cuil/cuit is required']
    },
    cbu: {
        type: Number,
        required: [true, 'CBU is required']
    },
    tipoDeContribuyente: {
        type: String,
        required: [true, 'Tipo de contribuyente is required']
    },
    claveFiscal: {
        type: String,
        required: [true, 'Clave Fiscal is required']
    },
    redDePago: {
        type: String,
        required: [true, 'Red de Pago is required']
    },
    entidadBancaria: {
        type: String,
        required: [true, 'Entidad Bancaria is required']
    },
    domicilioReal: {
        type: String,
        required: [true, 'Domicilio real is required']
    },
    domicilioLegal: {
        type: String,
        required: [true, 'Domicilio legal is required']
    },
    sedeDeExplotacion: {
        type: Array,
        required: [true, 'Sede de Exp is required']
    },
    agencia: {
        type: String,
        required: [true, 'Agencia is required']
    },
    claveDeAcceso: {
        type: String,
        required: [true, 'Acces key is required']
    },
});

ClientSchema.methods.toJSON = function(){
    const { __v, _id, ...client } = this.toObject();
    client.uid = _id;
    return client;
}

module.exports = model('Client', ClientSchema);