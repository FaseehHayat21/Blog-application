const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const userblogs = require('../models/UserBlogs');
const { body, validationResult } = require('express-validator');
// const multer = require('multer');

// // Set up multer storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Set the destination folder for uploaded files
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // Set a unique filename
//     }
// });

// const upload = multer({ storage: storage });




router.get('/fetchallblogs', fetchuser, async (req, res) => {
    try {
        const blog = await userblogs.find({ user: req.user.id });
        res.json(blog)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/fetchallblogss',  async (req, res) => {
    try {
        const blog = await userblogs.find();
        res.json(blog)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/addblog', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag, image } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const blog = new userblogs({
                title, description, tag, image,user: req.user.id
            })
            const savedBlog = await blog.save()

            res.json(savedBlog)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// router.post('/addblog', fetchuser, upload.single('image'), [
//   body('title', 'Enter a valid title').isLength({ min: 3 }),
//   body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
// ], async (req, res) => {
//   try {
//       const { title, description, tag } = req.body;

//       // If there are errors, return Bad request and the errors
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//       }

//       // Check if an image is uploaded
//       const imagePath = req.file ? req.file.path : null;

//       const blog = new userblogs({
//           title, description, tag, user: req.user.id, image: imagePath
//       });

//       const savedBlog = await blog.save();

//       res.json(savedBlog);

//   } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//   }
// });

router.put('/updateblog/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newBlog = {};
        if (title) { newBlog.title = title };
        if (description) { newBlog.description = description };
        if (tag) { newBlog.tag = tag };

        // Find the note to be updated and update it
        let blog = await userblogs.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        if (blog.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        blog = await userblogs.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true })
        res.json({ blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.delete('/deleteblog/:id', fetchuser, async (req, res) => {
    try {
        // Find the BLOG to be delete and delete it
        let blog = await userblogs.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this BLOG
        if (blog.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        blog = await userblogs.findByIdAndDelete(req.params.id)
        res.json({ "Success": "BLOG has been deleted", blog: blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router