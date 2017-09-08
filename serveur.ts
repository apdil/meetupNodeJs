
import * as express from 'express';
import * as mustache from 'mustache';
import * as mustacheExpress from 'mustache-express';
const app = express();

app.get('/', function(req, resp){
    resp.render('index', {
        nom:'super trop bien',
        project:'j ai menti'
    })
});

app.engine('html', mustacheExpress());

app.set('views', './public');
app.set('view engine', 'html');

app.use(express.static('public/'));

app.listen(8080, function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('serveur 8080...');
})