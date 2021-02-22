const BlogPost = require('../models/BlogPost.js')
const path = require('path')

 module.exports = (req, res) => {
    let image = req.files.image;
    // console.log(__dirname);
    console.log(path.join(__dirname, '../public/upload', image.name))
    image.mv(path.join(__dirname, '../public/upload', image.name), function (error) {
        console.log("Loi: " + error);
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name
        }, function (err) {
            res.redirect('/')
        })
    })

}

// const BlogPost = require('../models/BlogPost.js')
// const path = require('path')

// module.exports = (req, res) => {
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, '..', '/public/upload', image.name), function (error) {
//         console.log("Loi: " + error);
//         BlogPost.create({
//             ...req.body,
//             image: '/upload/' + image.name
//         }, function (err) {
//             res.redirect('/')
//         })
//     })
// }

  
