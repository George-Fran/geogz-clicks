const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Image = require('../models/Personalizado');
const Personalizado = require('../models/Personalizado');
const querystring = require('querystring');

router.get('/', async (req, res) => {
    const personalizados = await Personalizado.find();
    res.render('index', { personalizados });
});

router.get('/crear', (req, res) => {
    res.render('subir');
});

router.post('/crear', async (req, res) => {
    const personalizado = new Personalizado();
    personalizado.title = req.body.title;
    personalizado.description = querystring.escape(req.body.description);

    // Guarda el elemento recién creado
    const nuevoPersonalizado = await personalizado.save();

    // Genera el enlace personalizado
    const linkPersonalizado = `/adaptado/${nuevoPersonalizado._id}`;

    // Envía una respuesta JSON con el enlace
    res.json({ success: true, link: linkPersonalizado });
});


router.get('/adaptado/:id', async (req, res) => {
    const { id } = req.params
    const personalizado = await Personalizado.findById(id);
    res.render('linkpropio', { personalizado });
});


module.exports = router;