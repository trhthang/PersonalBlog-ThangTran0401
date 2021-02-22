const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true , useUnifiedTopology: true });

BlogPost.create({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
    body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
}, (error, blogpost) => {
    console.log(error, blogpost);
});

BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot)
})

BlogPost.find({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

BlogPost.find({
    title: /Node.js/
}, (error, blogspot) => {
    console.log(error, blogspot)
})

var id = "5f811678efd5310d88facda2";
BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

var id = "5f811678efd5310d88facda2";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
    console.log(error, blogspot)
})



