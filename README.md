# GraphQL-Express-Apollo-MongoDB
Quick walkthrough through intro to GraphQL via Express, Apollo Server, and MongoDB.

# Starting the Project
To install dependencies and start the project, execute the following:

```sh
npm install 
npm start
```

## MongoDB Usage
The following queries and mutations were defined on the ``/graphql`` path, accessible through the GUI path of ``/graphiql``.

To get all of the authors:

``
query {
  authors {
    id
    name
    age
    books
  }
}
``

To get an individual author by ID:

``
query {
  author(id: "9565d990-d265-11e8-bf50-1508bdbd4db3") {
    id
    name
    age
    books
  }
}
``

To add an author:

``
mutation {
  addAuthor(name: "Stephen King", age: 65, books: ["It", "Dark Tower"]) {
    id
    name
    age
    books
  }
}
``

To update an author's name:

``
mutation {
  deleteAuthor(id: "<id in MongoDB>") {
    id
    name
    age
    books
  }
}
``

## Important
MongoDB must be ran from localhost unless redefined.