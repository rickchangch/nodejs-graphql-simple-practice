# Simple Practice for GraphQL and REST API using NodeJS
There is a simple practice to present that how to fetch specific data set from REST API through requesting the GraphQL API gateway.
## Folder structure
```
    .
    ├── pure_nodejs/            # test pure NodeJS feature
    │   ├── event_loop .js         # observe the priority of common asynchronous method in event loop mechanism
    │   └── http_server.js         # test built-in http module
    ├── rest_api_server/        # build backend server through Express.js to implement REST API endpoints
    │   ├── index.js               # entry point of the server
    │   └── Makefile               # provide some shortcuts to test api endpoints
    └── graphql_api_gateway/    # build backend server through Apollo Server to implement GraphQL API gateway as a adapter between client-side request and REST API server
        ├── index.js               # entry point of the server
        └── api.js                 # data source of graphql
```

## Usage
- Activate REST API server.
```
node rest_api_server/index.js
```
- Activate GraphQL API gateway server.
```
node graphql_api_gateway/index.js
```
- Samples of GraphQL query language.
  - [apollo server sandbox](https://studio.apollographql.com/sandbox/explorer)
  - Get
    ```
    query GetUser($userId: ID) {
      user(id: $userId) {
        __typename
        name
        age
      }
    }
    ```
  - List
    ```
    query GetUsers {
      users {
        age
        name
        __typename
      }
    }
    ```

  - Create
    ```
    mutation AddUser($name: String, $age: Int) {
      addUser(name: $name, age: $age)
    }
    ```
  - Update
    ```
    mutation UpdateUser($id: ID, $name: String, $age: Int) {
      updateUser(id: $id, name: $name, age: $age)
    }
    ```
  - Delete
    ```
    mutation DeleteUser($id: ID) {
      deleteUser(id: $id)
    }
    ```