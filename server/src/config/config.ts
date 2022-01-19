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
    url: "mongodb+srv://tora-pan:Tatsulok1@react-blog-cluster.8gwaa.mongodb.net/blogDB",
  },
  server: {
    host: "localhost",
    port: 1337,
  },
};

export default config;
