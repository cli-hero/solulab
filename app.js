const mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hansraj';

mongoclient.connect(url,(err,db)=>{
    if(err){console.log('error occured');}
    if(db){console.log('database connected');}
    var dbo = db.db('hansraj');
    dbo.createCollection('task',(err,col)=>{
        if(err) throw err
        if(col){console.log('collection created');}
    });
    
    var obj = {name:"hansraj",id:"160"};
    var collection = dbo.collection('task');
    collection.insertOne(obj,(err,data)=>{
        if(err) throw err
        if(data){console.log('data inserted');}
    });
    collection.findOne({},(err,result)=>{
        if(err) throw err
        if(result){console.log(result.name);}
    });
    var myquery = { name: "hansraj"};
    var newvalues = { $set: {id:"180"} };
    collection.updateOne(myquery,newvalues,(err,result)=>{
        if(err) throw err;
        if(result){console.log('database updated');}
    });
    collection.deleteOne(myquery,(err,result)=>{
        if(err) throw err;
        if(result){console.log('deleted');}
    });
    db.close();
})

