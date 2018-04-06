 var express = require("express"),
 router = express.Router(),
 user = require("../models/user.js");


//var serverpath="http://localhost:8000/"

 

router.post("/register", function(req, res) {

    var obj = req.body;
    var model = new user(obj)

       model.save(function(err) {
                 if (err) {
                 res.json({ success: false, message: 'Data Save failed.', error:err});
                 return;

                 }else{
               

                    res.json({ success: true, message: 'Data saved' });

                 }
                
               
     })

})

module.exports = router;