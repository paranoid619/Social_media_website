module.exports=(req,res)=>{
    if (req.isAuthenticated()){
        req.flash('success','Logged in Successfully !!!!');
        return res.redirect('/user/profile');
    }

    res.render('home_page',{
        title: 'Accourt | Login or Signup'
    })
   
}