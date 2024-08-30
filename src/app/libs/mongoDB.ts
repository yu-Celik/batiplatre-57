import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let isConnected = false;

export async function connectDB() {
    if (!isConnected) {
        try {
            await client.connect();
            isConnected = true;
            console.log("Connected to MongoDB");

            const db = client.db("batiplatre57");
            await db.command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            return db;
        } catch (error) {
            console.error("Error connecting or pinging MongoDB:", error);
            throw error;  // Propagate the error
        }
    }
    return client.db("batiplatre57");
}