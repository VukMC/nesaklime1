const express = require('express');
const router = express.Router();
const narudzbine = require('../models/narudzbine');

const add_payment_info_layout = '../views/layouts/add_payment_info';
const checkout_initiated_layout = '../views/layouts/checkout_initiated';
const purchase_layout = '../views/layouts/purchase';
const view_content_layout = '../views/layouts/view_content';

// Routes
router.get('', (req, res) => {
    res.render('index'); 
});

router.get('/about', (req, res) => {
    res.render('about'); 
});

router.get('/katalog', (req, res) => {
    res.render('katalog', { layout: view_content_layout }); 
});

//---------------------Klime------------------------
router.get('/gree-pular-12k', (req, res) => {
    res.render('klime/gree-pular-12k', { layout: view_content_layout }); 
});

router.get('/gree-clivia-ai-12k', (req, res) => {
    res.render('klime/gree-clivia-ai-12k', { layout: view_content_layout }); 
});

router.get('/gree-clivia-Ai-12k-black', (req, res) => {
    res.render('klime/gree-clivia-ai-12k-black', { layout: view_content_layout }); 
});

router.get('/gree-amber-pro-12k', (req, res) => {
    res.render('klime/gree-amber-pro-12k', { layout: view_content_layout }); 
});

router.get('/bergen-kron-smart-12k', (req, res) => {
    res.render('klime/bergen-kron-smart-12k', { layout: view_content_layout }); 
});

router.get('/bergen-kron-smart-12k-black', (req, res) => {
    res.render('klime/bergen-kron-smart-12k-black', { layout: view_content_layout }); 
});

router.get('/bergen-apollo-t-12k', (req, res) => {
    res.render('klime/bergen-apollo-t-12k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-hr-smart-12k', (req, res) => {
    res.render('klime/mitsubishi-hr-smart-12k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-hr-smart-18k', (req, res) => {
    res.render('klime/mitsubishi-hr-smart-18k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-hr-smart-24k', (req, res) => {
    res.render('klime/mitsubishi-hr-smart-24k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-bt-12k', (req, res) => {
    res.render('klime/mitsubishi-bt-12k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-bt-18k', (req, res) => {
    res.render('klime/mitsubishi-bt-18k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-ln-12k', (req, res) => {
    res.render('klime/mitsubishi-ln-12k', { layout: view_content_layout }); 
});

router.get('/mitsubishi-ln-12k-red', (req, res) => {
    res.render('klime/mitsubishi-ln-12k-red', { layout: view_content_layout }); 
});

//----------------Poruci Klime-----------------------
router.get('/poruci-gree-pular-12k', (req, res) => {
    res.render('poruci-klimu/poruci-gree-pular-12k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-gree-clivia-ai-12k', (req, res) => {
    res.render('poruci-klimu/poruci-gree-clivia-ai-12k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-clivia-Ai-12k-black', (req, res) => {
    res.render('poruci-klimu/poruci-clivia-Ai-12k-black', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-amber-pro-12k', (req, res) => {
    res.render('poruci-klimu/poruci-amber-pro-12k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-kron-smart-12k', (req, res) => {
    res.render('poruci-klimu/poruci-kron-smart-12k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-kron-smart-12k-black', (req, res) => {
    res.render('poruci-klimu/poruci-kron-smart-12k-black', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-apollo-t-12k', (req, res) => {
    res.render('poruci-klimu/poruci-apollo-t-12k', { layout: checkout_initiated_layout });
});

router.get('/poruci-mitsubishi-hr-smart-12k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-hr-smart-12k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-mitsubishi-hr-smart-18k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-hr-smart-18k', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-mitsubishi-hr-smart-24k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-hr-smart-24k', { layout: checkout_initiated_layout });
});

router.get('/poruci-mitsubishi-bt-12k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-bt-12k', { layout: checkout_initiated_layout });
});

router.get('/poruci-mitsubishi-ln-12k-red', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-ln-12k-red', { layout: checkout_initiated_layout }); 
});

router.get('/poruci-mitsubishi-ln-12k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-ln-12k', { layout: checkout_initiated_layout });
});

router.get('/poruci-mitsubishi-bt-18k', (req, res) => {
    res.render('poruci-klimu/poruci-mitsubishi-bt-18k', { layout: checkout_initiated_layout });
});

//------------Updejtuj porudzbinu u bazu podataka--------
router.post('/post-poruci-gree-pular-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Gree Pular 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-amber-pro-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Gree Amber Pro 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-bergen-apollo-t-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Bergen Apollo T 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-gree-clivia-ai-12k-black', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Gree Clivia Ai 12k Black"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-gree-clivia-ai-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Gree Clivia Ai 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-kron-smart-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Bergen Kron Smart 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-bergen-kron-smart-12k-black', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Bergen Kron Smart 12k Black"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-hr-smart-12k', async(req, res) => { 
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi HR Smart 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-hr-smart-18k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi HR Smart 18k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-hr-smart-24k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi HR Smart 24k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-bt-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi BT Smart 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-bt-18k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi BT Smart 18k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-ln-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi LN Smart 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/post-poruci-mitsubishi-ln-12k-red', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            klima: "Mitsubishi LN Smart 12k Red"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

module.exports = router;

//---------bezkorisni-primeri-----------------------

//---------------ubacuje-narudzbine-u-db------------
    // function ubaciNarudzbinuUDB() {
    //     narudzbine.insertMany([
    //         {
    //             ime: "Vuk",
    //             prezime: "Mudrinic",
    //             telefon: "0615566989",
    //             grad: "Novi Sad",
    //             mesto: "Liman 2",
    //             ulica: "Resavska 4",
    //             postanski: "21000",
    //         },
    //         {
    //             ime: "Nebojsa",
    //             prezime: "Jovanovic",
    //             telefon: "0615566989",
    //             grad: "Novi Sad",
    //             mesto: "Podbara",
    //             ulica: "Patrijarha Carnojevica 5",
    //             postanski: "21000",
    //         },
    //     ])
    // }
    // ubaciNarudzbinuUDB();