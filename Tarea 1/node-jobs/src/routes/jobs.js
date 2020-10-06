const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { isAuthenticated } = require('../helpers/auth');

router.get('/jobs/add', isAuthenticated, (req, res) => {
    res.render('jobs/new-job')
});

router.post('/jobs/new-job', isAuthenticated , async (req, res) => {
    const{
         company,
    tipo,
    logo,
    url,
    position,
    location,
    category,
    description } = req.body;
    const errors = [];
    if(!company){
        errors.push({text: 'El Campo Compañia es obligatorio'});
    }
    if(!position){
        errors.push({text: 'El Campo Posición es obligatorio'});
    }
    if(!location){
        errors.push({text: 'El Campo Ubicación es obligatorio'});
    }
    if(!description){
        errors.push({text: 'El Campo Descripción es obligatorio'});
    }
    if(errors.length > 0){
        res.render('jobs/new-job', {
            errors,
            company,
            tipo,
            logo,
            url,
            position,
            location,
            category,
            description
            
        })
    } else{
        const newJob = new Job({company,
            tipo,
            logo,
            url,
            position,
            location,
            category,
            description});
            newJob.user = req.user.id;
            await newJob.save();
            req.flash('success_msg', 'Empleo Publicado Correctamente');
            res.redirect('/jobs')
    }
});

router.get('/jobs', isAuthenticated ,async (req, res) => {
    const jobs = await Job.find({user: req.user.id}).sort({date: 'desc'}).lean();
    res.render('jobs/all-jobs', { jobs });
});



router.get('/post/:id', async (req, res) => {
    const jobs = await Job.findById(req.params.id).lean();
    res.render('jobs/jobs-post', {jobs});
});


router.get('/jobs/edit/:id',isAuthenticated , async (req, res) =>{
const jobs = await Job.findById(req.params.id).lean();
res.render('jobs/edit-job', {jobs})
});

router.put('/jobs/edit-job/:id',isAuthenticated , async (req, res) => {
  
    const{
        company,
   tipo,
   logo,
   url,
   position,
   location,
   category,
   description } = req.body;
   const errors = [];
   if(!company){
       errors.push({text: 'El Campo Compañia es obligatorio'});
   }
   if(!position){
       errors.push({text: 'El Campo Posición es obligatorio'});
   }
   if(!location){
       errors.push({text: 'El Campo Ubicación es obligatorio'});
   }
   if(!description){
       errors.push({text: 'El Campo Descripción es obligatorio'});
   }
   if(errors.length > 0){
       res.render('jobs/edit-job', {
           errors,
           company,
           tipo,
           logo,
           url,
           position,
           location,
           category,
           description
           
       })} else{ 
        const{
      company,
       tipo,
       logo,
       url,
       position,
       location,
       category,
       description } = req.body;
        await Job.findByIdAndUpdate(req.params.id, {
            company,
             tipo,
             logo,
             url,
             position,
             location,
             category,
             description }).lean();
         req.flash('success_msg', 'Post Actualizado correctamente');
         res.redirect('/jobs');
        }
    });

    router.delete('/jobs/delete/:id',isAuthenticated , async (req, res) => {
    await Job.findOneAndDelete(req.params.id).lean();
    req.flash('success_msg', 'Post Eliminado Correctamente');
    res.redirect('/jobs');
    });



module.exports = router;