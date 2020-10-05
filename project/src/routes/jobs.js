const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('jobs/add');
});

router.post('/add', (req, res) => {
    
})

module.exports = router;