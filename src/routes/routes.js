// TODO: Enrutamiento

import {Router} from 'express';
const router = Router()


router.get('/', (req,res) => res.render('index', {title: 'Primera web con Node'}) ) //* Con esto se renderiza un archivo .ejs según la ruta puesta
router.get('/about', (req,res) => res.render('about', {title: 'About me'}) )
router.get('/contact', (req,res) => res.render('contact', {title: 'Contact Page'}) )


export default router