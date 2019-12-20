const express = require('express');
const router = express.Router();

const Blogs = require('../models/blog.js');


router.get('/', (req, res)=>{
    Blogs.find({}, (err, foundBlogs)=>{
        res.json(foundBlogs);
    });
});


router.get('/:user', (req, res)=>{
    Blogs.find({user:req.params.user}, (err, foundBlogs)=>{
        res.json(foundBlogs);
    });
});

router.post('/', (req, res)=>{
    Blogs.create(req.body, (err, createdBlog)=>{
        res.json(createdBlog);
    });
});

router.delete('/:id', (req, res)=>{
    Blogs.findByIdAndRemove(req.params.id, (err, deletedBlog)=>{
        res.json(deletedBlog);
    });
});

router.put('/:id', (req, res)=>{
    Blogs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBlog)=>{
        res.json(updatedBlog);
    });
});

module.exports = router;
