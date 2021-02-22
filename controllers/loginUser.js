const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;
    // return console.log(username);
   
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            // bcrypt.compareSync(password, user.password, (error, same) => {
            // //     // if (same) { // if passwords match
            // //     //     // store user session, will talk about it later
            // //     //     console.log('giống nhau mà!');
            // //     //     res.redirect('/')
            // //     // } else {
            // //     //     res.redirect('/auth/login')
            // //     //     console.log('khác nhau à?');
            // //     // }
            //     console.log(same)
            // })
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                      req.session.userId = user._id
                      console.log('giống nhau mà!');
                      res.redirect('/')
                  } else {
                      res.redirect('/auth/login')
                      console.log('khác nhau à?');
                  }
            });
        } else {
            res.redirect('/auth/login')
            console.log('ko có user đó!');
        }
    })
}
