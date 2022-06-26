console.log('hola soy servidor');
const express= require('express');
const app = express();
const port=('process.env.port',3009);
app.set('port',port);
app.listen(app.set('port'));
