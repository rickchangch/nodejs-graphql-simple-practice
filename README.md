# nodejs-practice

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
- activate REST API server
```
node rest_api_server/index.js
```
- activate GraphQL API gateway server
```
node graphql_api_gateway/index.js
```
- GraphQL query language
  - Get
    ```
    query GetUser($userId: ID) {
      user(id: $userId) {
        __typename
        name
        age
      }
    }

    OR

    curl --request POST \
      --header 'content-type: application/json' \
      --url http://localhost:4000/ \
      --data '{"query":"query GetUser($userId: ID) {\n  user(id: $userId) {\n    __typename\n    name\n    age\n  }\n}","variables":{"userId":"0"}}'
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

    OR

    curl --request POST \
      --header 'content-type: application/json' \
      --url http://localhost:4000/ \
      --data '{"query":"query GetUsers {\r\n  users {\r\n    age\r\n    name\r\n    __typename\r\n  }\r\n}"}'
    ```

  - Create
    ```
    mutation AddUser($name: String, $age: Int) {
      addUser(name: $name, age: $age)
    }

    OR

    curl --request POST \
      --header 'content-type: application/json' \
      --url http://localhost:4000/ \
      --data '{"query":"mutation AddUser($name: String, $age: Int) {\r\n  addUser(name: $name, age: $age)\r\n}","variables":{"name":"FOx","age":11}}'
    ```
  - Update
    ```
    mutation UpdateUser($id: ID, $name: String, $age: Int) {
      updateUser(id: $id, name: $name, age: $age)
    }

    OR

    curl --request POST \
      --header 'content-type: application/json' \
      --url http://localhost:4000/ \
      --data '{"query":"mutation UpdateUser($id: ID, $name: String, $age: Int) {\r\n  updateUser(id: $id, name: $name, age: $age)\r\n}","variables":{"id":"0","name":"Rick","age":77}}'
    ```
  - Delete
    ```
    mutation DeleteUser($id: ID) {
      deleteUser(id: $id)
    }

    OR

    curl --request POST \
      --header 'content-type: application/json' \
      --url http://localhost:4000/ \
      --data '{"query":"mutation DeleteUser($id: ID) {\r\n  deleteUser(id: $id)\r\n}","variables":{"id":"0"}}'
    ```