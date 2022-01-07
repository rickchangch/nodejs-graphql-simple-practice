const { ApolloServer, gql } = require('apollo-server');
const { RestAPI } = require('./api');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    name: String
    age: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    user(id: ID): User
    users: [User]
  }

  # The Mutation type is similar in structure and purpose to the Query type.
  # Whereas the Query type defines entry points for read operations,
  # the Mutation type defines entry points for write operations.
  type Mutation {
    addUser(name: String, age: Int): String
    updateUser(id: ID, name: String, age: Int): String
    deleteUser(id: ID): String
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    user: async (_source, { id }, { dataSources }) => {
      return dataSources.api.getUser(id);
    },
    users: async (_source, _args, { dataSources }) => {
      return dataSources.api.getUsers();
    },
  },
  Mutation: {
    addUser: async (_source, _args, { dataSources }) => {
      return dataSources.api.createUser(_args);
    },
    updateUser: async (_source, _args, { dataSources }) => {
      let id = _args.id;
      // not good practice
      delete _args['id'];
      return dataSources.api.updateUser(id, _args);
    },
    deleteUser: async (_source, { id }, { dataSources }) => {
      return dataSources.api.deleteUser(id);
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      api: new RestAPI(),
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
