const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const apiOneSchema = new mongoose.Schema({
    city: String,
<<<<<<< HEAD
    date: String,
=======
    date: Date,
    times: {
>>>>>>> f1f726c704e8793b6e70c391cb7024ebd241633e
        Fajr: String,
        Sunrise : String,
        Dhuhr: String,
        Asr: String,
        Maghrib: String,
        Isha: String,
        Imsak:String,
<<<<<<< HEAD
    
=======
    }
>>>>>>> f1f726c704e8793b6e70c391cb7024ebd241633e

  });
  

  const apiTwoSchema = new mongoose.Schema({
    hadith:String,
    narrator:String,
    book: String

  });


  const ApiThreeSchema = new mongoose.Schema({
    title: String,
    image: String,
    sourceName: String,
    sourceUrl: String,
    servings: Number,
    readyInMinutes: Number,
    summary : String


  });

<<<<<<< HEAD

  





=======
>>>>>>> f1f726c704e8793b6e70c391cb7024ebd241633e
const Prayer = mongoose.model('ApiOne', apiOneSchema);
const Hadith = mongoose.model('ApiTwo', apiTwoSchema);
const Recipes = mongoose.model('ApiThree', ApiThreeSchema);

<<<<<<< HEAD




=======
>>>>>>> f1f726c704e8793b6e70c391cb7024ebd241633e
module.exports={Prayer,Hadith,Recipes};