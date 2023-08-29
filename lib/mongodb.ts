import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.MONGODB_URL;

const options = {
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const client = new MongoClient(URI, options);
const clientPromise = client.connect();

export default clientPromise;
