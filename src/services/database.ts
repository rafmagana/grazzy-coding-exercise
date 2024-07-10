import { MongoClient, Db, Collection } from "mongodb"

// External Dependencies

// Global Variables
export const collections: { sunsetdatas?: Collection } = {}

// Initialize Connection

export async function connectDB () {
    const client: MongoClient = new MongoClient("mongodb://mongo:27017")

    await client.connect()

    const db: Db = client.db('grazzy');

    const sunsetDataCollection: Collection = db.collection('sunsetdatas');

    collections.sunsetdatas = sunsetDataCollection

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${sunsetDataCollection.collectionName}`);
}