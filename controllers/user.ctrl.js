import Utilisateur from '../models/user.model.js'
import jwt from 'jsonwebtoken';

const userList = async (req, res) => {
    try {
        const user = await Utilisateur.find();
        res.json({
            utilisateur: user
        })
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const createUser = async (req, res) => {
    const { nom, prenom, email, identite, adresse, sexe, age, dateNaissance, profession, pays, ville, photo, numeroTelephone, numeroCompte, password } = req.body

    const user = new Utilisateur({ nom: nom, prenom: prenom, email: email, identite: identite, adresse: adresse, sexe: sexe, age: age, dateNaissance: dateNaissance, profession: profession, pays: pays, ville: ville, photo: photo, numeroTelephone: numeroTelephone, numeroCompte: numeroCompte, password: password });

    try {
        const userCreate = await user.save(user);
        res.json({
            message: 'utilisateur enregistrer'
        })
    } catch (error) {
        res.json({
            error: error
        })
    }
}


const showUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await Utilisateur.findOne({ _id: id })
        res.json({
            utilisateur: user
        })
    } catch (error) {
        res.json({
            erreur: error
        })
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, identite, adresse, sexe, age, dateNaissance, profession, pays, ville, photo, numeroTelephone, numeroCompte, password } = req.body
    try {
        const user = await Utilisateur.findOne({ _id: id })
        if (user) {
            try {
                const result = await Utilisateur.updateOne({ _id: id }, { nom: nom, prenom: prenom, email: email, identite: identite, adresse: adresse, sexe: sexe, age: age, dateNaissance: dateNaissance, profession: profession, pays: pays, ville: ville, photo: photo, numeroTelephone: numeroTelephone, numeroCompte: numeroCompte, password: password })
                res.json({
                    message: "Utilisateur modifier avec succes"
                })
            } catch (error) {
                res.json({
                    erreur: error
                })
            }
        } else {
            res.json({
                erreur: "Utilisateur non trouvé"
            })
        }
    } catch (error) {
        res.json({
            erreur: error
        })
    }


}

const login = async (req, res) => {
    const { email, password} = req.body
    try {
        const user = await Utilisateur.findOne({ email: email });
        if(user){
            if(password == user.password){
                const token = jwt.sign({id: user._id}, process.env.TOKEN_KEY)
                res.json({
                    token: token
                })

            }else{
                res.json({
                    message: "Mot de passe différent"
                })
            }
            res.json({
                message: "Utilisateur trouver"
            })
        }else{
            res.json({
                erreur: "L'utilisateur n'existe pas"
            })
        }
    } catch (error) {
        res.json({
            erreur: error
        })
    }
}

const toggleAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Utilisateur.findOne({ _id: id })
        if (user) {
            try {
                if(user.statusCompte){
                    const result = await Utilisateur.updateOne({ _id: id }, { statusCompte: false })
                    res.json({
                        message: "Compte désactiver avec succes"
                    })
                }else{
                    const result = await Utilisateur.updateOne({ _id: id }, { statusCompte: true })
                    res.json({
                        message: "Compte activer avec succes"
                    })
                }
            } catch (error) {
                res.json({
                    erreur: error
                })
            }
        } else {
            res.json({
                erreur: "Utilisateur non trouvé"
            })
        }
    } catch (error) {
        res.json({
            erreur: error
        })
    }
}

export {
    userList,
    createUser,
    showUser,
    updateUser,
    login,
    toggleAccount
}