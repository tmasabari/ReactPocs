const express = require('express');
const bodyParser = require('body-parser');
var ItemModel = require("./db");
var cors = require("cors");  

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Logging middleware  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
app.use((req, res, next) =>
{
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});


app.post('/items', async (req, res) =>
{
    const newItem = new ItemModel(req.body);
    const result = await newItem.save();
    res.send(result);
});

app.get('/items', async (req, res) =>
{
    const items = await ItemModel.find();
    res.send(items);
});

app.get('/items/:id', async (req, res) =>
{
    const item = await ItemModel.findOne({ id: req.params.id });
    res.send(item);
});

app.put('/items', async (req, res) =>
{
    const updatedItem = await ItemModel.findOneAndUpdate({ id: req.body.id }, req.body);
    res.send(updatedItem);
});

app.delete('/items/:id', async (req, res) =>
{
    const deletedItem = await ItemModel.findOneAndDelete({ id: req.params.id });
    res.send(deletedItem);
});

// added try-catch blocks in each route handler to catch any errors that occur when interacting with the database. If an error occurs, it’s passed to the next() function, which then calls the error-handling middleware.
// Error handling middleware
//Remember, error-handling middleware should be the last middleware added to the stack, after all other app.use() and route calls.
//Please note that in Express, error-handling middleware always takes four arguments. 
//Even if you don’t need to use the next object, you must specify them to maintain the signature, 
//otherwise it will be interpreted as regular middleware and will not handle errors.
app.use((err, req, res, next) =>
{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3002, () => console.log('Server is running on port 3002'));
