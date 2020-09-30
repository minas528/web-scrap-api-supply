const express = require('express');
const router = express.Router();

const Whisky = require('../model/Whisky');



router.get("/", async(req, res)=>{
    try{
        const whisky = await Whisky.find();
        res.status(200).json(whisky);
    } catch (err){
        res.status(500).json({ message:err});
    }
    // res.send("hello world from Minasie")
});

// router.get("/1", (req, res) => {
//     res.send("we are now in course #1");
// });
// router.get("/:courseId", (req, res)=>{
//     const id = req.params.courseId;
//     Course.findById(id)
//         .exec()
//         .then(result => {
//             if (result) {
//                 res.status(200).json(result);
//             }else{
//                 res.status(404).json({message : "No valid entry found"});
//             }
//         })
//         .catch(err=>{
//             res.status(500).json({message: err});
//         });
// });
router.get("/:courseId", async (req, res)=>{
    try{
        const id = req.params.courseId;
        const course = await Course.findById(id);
        if ( course){
            res.status(200).json(course);
        } else {
            res.status(404).json({message: " No valid entry found"});
        }
    } catch (err) {
        res.status(500).json({message:err});
    }
});

// router.post("/" ,(req,res ) => {
//     const mycourse = new Course({
//         course : req.body.course,
//         tag: req.body.tag
//     });
//     mycourse.save()
//     .then(result => {
//         res.status(201).json({
//             message : "Handling POST requist to /api/courses - SUCCESS!",
//             createdCourse: result
//         });
//     })
//     .catch(err => {
//         res.status(500).json({message: err});
//         // console.log(err);
//     });
// });

router.post("/", async (req, res) => {
    const mycourse = new Whisky({
        name: req.body.name,
        discription: req.body.discription,
        rating: req.body.rating,
        price: req.body.price,
        review: req.body.review
    });

    try{
        const savedCourse = await mycourse.save();
        res.status(201).json({
            message: "Handling POST request to /api/courses -   SUCCESS!",
            createdCourse: savedCourse
        });
    } catch(err){
        res.status(500).json({ message: err});
    }
});

module.exports = router;
