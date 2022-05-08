const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
//add helpers if used

const app = express();
const PORT = process.env.PORT || 3001;

//set up sessions
const sess = {

}

app.use(session(sess));

//what does this do?
const hbs = exphbs.create({helpers})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//how exactly does this impact directories
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false})
.then(()=> {
    app.listen(PORT, () => console.log('Now Listening'))
});