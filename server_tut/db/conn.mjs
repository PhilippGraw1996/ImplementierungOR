import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
async function run() {
  try {
    conn = await client.connect();
    console.log("Successfully connected to MongoDB")
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }

  return conn.db("EScooterBerlinFullSet");
}

 const db = run();

export default db;