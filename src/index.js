import express from 'express';
import ejs from 'ejs';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/routes.js'

const app = express();


const RUTA = dirname(fileURLToPath(import.meta.url)) //* Funcion para sacar la ruta de nuestros files :D


app.set('views', join(RUTA, '/views') )
app.set('view engine', 'ejs')

//* Enrutamiento:
app.use(indexRoutes)


app.listen(3000)
console.log('Server esta escuchando por puerto', 3000)

