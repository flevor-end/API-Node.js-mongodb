const app = require('./app');
const { connect } = require('./dababase');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid');





async function main() {
    // Database connection
    await connect();
    // Express Application
    await app.listen(app.get('port'));
    console.log('Server on port 4000: Connected');

}

main();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) =>{
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({ storage: storage }).single('image'));



// Global variables

// Routes

// static files