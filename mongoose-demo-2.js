const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () { //speak method
  const greeting = this.name
  ? "Meow name is " + this.name
  : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);
 
//create an Object
const fluffy = new Kitten({ name: 'Fluffy' });
fluffy.speak(); // "Meow name is Fluffy"
});


