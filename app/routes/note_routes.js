const { response } = require("express");

module.exports = function(app,db) {
    app.get('/Members',(req,res)=>{
        var dbo =db.db('VebholicMember');
        dbo.collection('VebholicMember').findOne({Organisation: "Vebholic"}, (err,result)=>{
            if(err){
                console.log(err)
                res.send({
                    'error':err.errmsg
                })
            }
            else{
                console.log(result);
                res.send(result.Members);
            }
        });
    });

    app.put('/updateMembers',(req,res)=>{
        var dbo =db.db('VebholicMember');
        console.log(req.body);
        var UpdatedBody={
            Organisation: 'Vebholic',
            Members: req.body
        }
        console.log(UpdatedBody);
        dbo.collection('VebholicMember').update ({Organisation:'Vebholic'}, UpdatedBody ,(err,result)=>{
            if(err){
                console.log("Error");
                res.send({Success:false , Message :"Hello"})
            }
            else{
                console.log("Success");
                res.send({Success:true , Message :"Hello"});
            }
        });
    })
}