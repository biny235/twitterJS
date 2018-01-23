const express = require('express');
const nunjucks = require('nunjucks')

const app = express();

const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true })

app.use((req, res, next)=>{
    res.render('index', { title: 'hall of fame', people:people })
    next();
});





app.listen(3000)