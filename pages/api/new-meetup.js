import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://yoyo:123321@cluster0.k7eye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "the meetup inserted" });
  }
}

export default handler;
