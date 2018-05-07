var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('assets'));

app.use('/auth/google', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /auth/google.');
    next();
});


app.get('/auth/google', function(req, res){
    res.render('first-template');
});


app.get('/succeed/login', function (req, res) {
	res.render('second-template', {
    username: req.query.login
  })
});
    
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});