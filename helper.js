import { ObjectId } from 'mongodb';
import { createConnection } from './server.js';

export async function getAllCribs() {
    const client = await createConnection();
    const results = await client
        .db("flipkart")
        .collection("cribs")
        .find({})
        .toArray();
    return results;
}
export async function addcribs(cribs) {
    const client = await createConnection();
    const results = await client
        .db("flipkart")
        .collection("cribs")
        .insertOne(cribs);


    return results;
}
export async function deleteCribs(id) {
    const client = await createConnection();
    const results = await client
        .db("flipkart")
        .collection("cribs")
        .deleteOne({ _id: ObjectId(id) });


    return results;
}
export async function updateCribs(id, updatedCribs) {
    const client = await createConnection();
    const results = await client
        .db("flipkart")
        .collection("cribs")
        .updateOne({ _id: ObjectId(id) }, { $set: updatedCribs });
    return results;
}
