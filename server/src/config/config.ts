import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "../../../.env" });

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@react-blog-cluster.8gwaa.mongodb.net/blogDB`;
const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      autoIndex: false,
      retryWrites: false,
    },
    url: connectionString,
  },
  server: {
    host: "localhost",
    port: 1337,
  },
};

export default config;
