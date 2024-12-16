import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    identite: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    sexe: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dateNaissance: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    photo: {
        type: String, 
        required: true
    },
    numeroTelephone: {
        type: String,
        required: true
    },
    numeroCompte: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    statusCompte: {
        type: Boolean,
        required: true,
        default: true
    }
})

export default mongoose.model('utilisateur', userSchema);