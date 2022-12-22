//const mongodb = require("mongodb");

//const mongoClient = mongodb.MongoClient;

const { MongoClient, ObjectId } = require("mongodb");

// const id = new ObjectId();
// console.log(id.getTimestamp());

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB");
    }
    const db = client.db(databaseName);

    //db.collection("users").insertOne(
    //   {
    //     name: "Vikaram",
    //     age: 50,
    //   },
    //   (perror, results) => {
    //     if (perror) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(results);
    //   }
    // );

    // db.collection("users").insertMany([
    //   {
    //     name: "Test1",
    //     age: 20,
    //   },
    //   {
    //     name: "Test2",
    //     age: 21,
    //   },
    // ], (perror, results) => {
    //     if(perror){
    //         return console.log("Unable to insert docs");
    //     }
    //     console.log(results);
    // });

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Test1",
    //       completed: true,
    //     },
    //     {
    //       description: "Test2",
    //       completed: false,
    //     },
    //     {
    //       description: "Test3",
    //       completed: true,
    //     },
    //   ],
    //   (perror, result) => {
    //     if (perror) {
    //       return console.log("Unable to insert tasks");
    //     }
    //     console.log(result);
    //   }
    // );

    // 631b6506ecba205b39c0331d
    // db.collection("tasks").find({completed: false}).toArray((error,results)=>{
    //   console.log(results);
    // })

    // db.collection("users").updateOne({
    //   _id: new ObjectId("631b6506ecba205b39c0331d")
    // },{
    //   $set:{
    //     name: "updated Arun"
    //   }
    // }).then( (result)=>{
    //   console.log(result);
    // }).catch(error=>{
    //   console.log(error);
    // })

    // db.collection("tasks").updateMany({
    //   completed: false
    // },{
    //   $set: {
    //     completed: true
    //   }
    // }).then(result=>{
    //   console.log(result);
    // }).catch(err=>{
    //   console.log(error);
    // })

    // db.collection("users").deleteMany({
    //   age: 39
    // }).then(result=>{
    //   console.log(result);
    // }).catch(error=>{
    //   console.log(error);
    // })

  //   db.collection("tasks").deleteOne({
  //     description: "Test1"
  //   }).then(result=>{
  //     console.log(result);
  //   }).catch(error=>{
  //     console.log(error);
  //   })
   }
);
