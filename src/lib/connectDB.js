import {
   MongoClient,
   ServerApiVersion
} from "mongodb";

// let db;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jvkj9eh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const uri = process.env.NEXT_PUBLIC_MONGO_URI

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   }
});

export const connectDB = async () => {

   // if (db) return db;
   try {
      
      const database = client.db("carDoctorPro");
      return database

   } catch (error) {
      console.log(error);
   }
}