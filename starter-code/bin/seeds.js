const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/Celebrities', {  
  // Überordner! VORSICHT BEI NAMENSÄNDERUNG! 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const celebrities = [
  {
      name: "Petra Swift",  
      occupation: "Singer",
      catchPhrase: "Hey ya"
    
  },
  {
    name: "Hans Tiger",  
    occupation: "Actos",
    catchPhrase: "Rawrrr"
  },

  {
    name: "Jenny Carlsson",  
    occupation: "Poet",
    catchPhrase: "Rosey rose"
  }
  
];


Celebrity.insertMany(celebrities)
  .then(data => {
    console.log(`Success! ${data.length} celebrities added to the collection`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });


