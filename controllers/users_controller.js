const User = require('../models/users');

module.exports.profile = function(req,res){
    return res.render('dashboard/dashboard',{
        title: "User Profile",
        name:"Jakass coder",
        field:"Rapchik coder"
    })
}
module.exports.mentorProfile = function(req,res){
    return res.render('mentor_profile',{
        title: "Mentor Profile"
    })
}

module.exports.tutor=function(req,res){
    return res.render('dashboard/mentor1',{
        title:"mentorsss",
        name:"Jakass coder",
        field:"Rapchik coder"
        
    })
}
module.exports.detail=function(req,res){
    return res.render('dashboard/student',{
        title:"mentorsss",
        name:"Jakass coder",
        field:"Rapchik coder"
        
    })
}
module.exports.testRules = function(req,res){
    return res.render('test-rules',{
        title: "rules"
    })
}
module.exports.showInfo = function(req,res){
    return res.render('mentor-info',{
        title: "info"
    })
}

module.exports.signUp = function(req,res){


    return res.render('signup_copy',{
        title: "CareerGuide | Sign Up"
    })
};

module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
       // console.log(res.locals);
        if(res.locals.user.field == "student"){
            return res.redirect('/users/profile');
        }
        if(res.locals.user.field == "mentor"){
            return res.redirect('/users/mentor_profile');
        }
        
    }
    return res.render('sign-in',{
        title: "CareerGuide | Sign In"
    })
}



// // get sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing up"); 
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating user in signing up"); 
                    return;
                }

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    
    })
    //console.log(req.body);

}

module.exports.verifyMentor = function(req,res){
    User.findOneAndUpdate({email: res.locals.user.email}, {$set:{verified:"true"}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    });
    // console.log(res.locals.user);
    return res.redirect('/users/mentor_profile');
}

module.exports.removeInterest = function(req,res){
    //console.log(res.locals.user);
    // res.locals.user.interest == "none";
    // console.log(res.locals.user);
    User.findOneAndUpdate({email: res.locals.user.email}, {$set:{interest:"none"}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
       // console.log(doc);
    });
    // console.log(res.locals.user);
    return res.redirect('/users/mentor_profile');
}




module.exports.createSession = function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(user.field == "student"){
            return res.redirect('/users/profile');
        }
        if(user.field == "mentor"){
            return res.redirect('/users/mentor_profile');
        }
    })
    
    //return res.redirect('/users/sign-in');
    
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}