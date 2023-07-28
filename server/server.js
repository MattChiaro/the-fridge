const express = require('express');
const path = require('path');
// const { ApolloServer } = require('apollo-server-express');

// const { typeDefs, resolvers } = require('./schema');
// const db = require('./config/connection');

const port = process.env.PORT || 3002;
const app = express();

// const server = new ApolloServer({
//     // typeDefs,
//     // resolvers,
//     });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//   }

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// const startApolloServer = async () => {
//     await server.start();
//     server.applyMiddleware({ app });

//     db.once('open', () => {
        app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
//         console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
//     }
//     );
// };

// startApolloServer();


//basic express server
app.listen(port, () =>  console.log(`🌍 Now listening on localhost:${port}`));