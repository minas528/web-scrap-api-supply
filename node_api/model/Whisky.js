const mongoose = require('mongoose');

const CourseSchema1 = mongoose.Schema({
    name: {
        type: String,
    },
    discription: {
        type: String,
    },
    rating: {
        type: String,
    },
    price: {
        type: String,
    },
    review: {
        type: String,
    }
},{collection : 'test1'});
// whisky = {
//     'name': name,
//     'discription':discription,
//     'rating': rating,
//     'price': price,
//     'review':review
// }


module.exports = mongoose.model("Whisky", CourseSchema1);