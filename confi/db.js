const mongoose = require('mongoose');

const dataBase = async () => {
        await 
        mongoose.connect('mongodb+srv://idrissoubachabi:Idrissou98@cluster0.qvncx.mongodb.net/BooksDB')
          .then(() => console.log("MongoDB connecté"))
          .catch(err => console.error("Erreur de connexion", err));
}


module.exports = dataBase 

