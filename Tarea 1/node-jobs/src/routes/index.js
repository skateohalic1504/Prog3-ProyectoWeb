const express = require('express');
const router = express.Router();
const Job = require('../models/Job');




router.get('/', async (req, res) => {
    const jobs = await Job.find().sort({date: 'desc'}).lean();
    res.render('index', { jobs });
});


/* router.get('/:page', (req, res, next) => {
let perPage = 9;
let page = req.params.page || 1;

Job 
.find({})
.skip((perPage * page) - perPage)
.limit(perPage)
.exec((err, jobs) => {
    Job.countDocuments((err, count) => {
        if (err) return next(err);
        res.render('index', {
            jobs,
            current: page,
            pages: Math.ceil(count / perPage)
        });
    })
})

}); */

router.get('/about', (req, res) =>{
    res.render('about');
});




module.exports = router;