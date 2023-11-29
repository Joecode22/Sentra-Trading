const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schemas/userSchema');
const resolvers = require('./graphql/resolvers/userResolver');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/SentraTrading')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log(`Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
  );
};

startServer().catch(e => console.error(e));
