console.log('hola soy servidor');
const express= require('express');
const app = express();
const port=('process.env.port',3000);
const cors=require('cors')
app.set('port',port);
app.listen(app.set('port'));
app.use(express.json())
app.use(cors())
app.use('/api',require('./Routes/rutas'));

