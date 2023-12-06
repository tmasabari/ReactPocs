const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tmasabarimongodb:password@cluster0.6dg7psw.mongodb.net/?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas');
});

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number,
    category: String,
    unitPrice: Number
});

const itemModel = mongoose.model('Item', itemSchema);
// Exporting itemModel 
module.exports = itemModel;