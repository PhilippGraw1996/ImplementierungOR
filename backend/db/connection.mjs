import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://admin:Tomatensaft17@cluster0.ynxxqtj.mongodb.net/?retryWrites=true&w=majority";

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

  return conn.db("test");
}

 const db = run();

export default db;