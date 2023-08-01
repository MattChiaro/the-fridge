const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const port = process.env.PORT || 3002;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
        console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    }
    );
};

startApolloServer();

