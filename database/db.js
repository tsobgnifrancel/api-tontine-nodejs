import mongoose from 'mongoose';

const connection = async (url) => {
    try{
        await mongoose.connect(url)
        console.log("Base de donnée connecté")
    }catch(error){
        console.error(`Erreur de connection à la base de donnée ${error}`)
    }
}

export default connection