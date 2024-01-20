// const MongoClient = require("mongodb").MongoClient;

// let db;

// const connectMongoDB = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://bhuvaneshhj:Bhuvi@cluster0.fghogsf.mongodb.net/noSQL?retryWrites=true&w=majority"
//   )
//     .then((result) => {
//       console.log("Connected!");
//       db = result.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err)
//       throw err;  
//     });
// };

// const getDb = () =>{
//   if(db){
//     return db
//   }
//   throw "No database found!"
// }

// exports.connectMongoDB = connectMongoDB; 
// exports.getDb = getDb; 
