module.exports = {
    getUser:(req,res)=>{
        return res.json("");
    },
    postUser:(req,res)=>{

    },
    getLogin:(req,res)=>{
        return res.render("");
    }
    ,
    login:(req, res) => {
        const { username, password } = req.body;
        return console.log(username);
       
        User.findOne({ username: username }, (error, user) => {
            if (user) {
                bcrypt.compareSync(password, user.password, (error, same) => {
                    if (same) { // if passwords match
                        // store user session, will talk about it later
                        console.log('giống nhau mà!');
                        res.redirect('/')
                    } else {
                        res.redirect('/auth/login')
                        console.log('khác nhau à?');
                    }
                })
            } else {
                res.redirect('/auth/login')
                console.log('ko có user đó!');
            }
        })
    }
}