import mongodb, { ObjectId } from 'mongodb';// grab codes writing from mongodb team to the js file


// connect client mongo yo the cluster// go to cluster and copy the link in ClusterO and follow instruction
const client = new mongodb.MongoClient('mongodb+srv://carlieDup:Aloulou0905@cluster0.ywpqv.mongodb.net?retryWrites=true&w=majority');

await client.connect(); // start the connection 
console.log('Connected!');
const db = client.db('trial'); // data base name
const collection = db.collection('users'); // colllection name
await collection.insertOne({
    firstName : 'KJ',
    lastName: 'Torribo',
    carCrash: true,
});
// go to cloud mongodb.com to see the updated


const results  = collection.find({
    firstName : 'KJ',

});
const users = await results.toArray();
console.log(users);


// to update info in mongp
// const user = await collection.findOne({
//     _id: new ObjectId ('6269635a0180ebd4866a9fa5')
// })



// to be confirm with Dariet
// const results = await collection.updateOne(
//     {firstName : 'KJ',
//         $set : {
//             carCrash: false
//         }


// })


await client.close();        // to close the connection