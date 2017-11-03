const authors = [{
  id: 1,
  name: 'JK Rowling',
  age: 50,
  books: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Prisoner of Azkaban']
}, {
  id: 2,
  name: 'George RR Martin',
  age: 70,
  books: ['Song of Ice and Fire', 'A Dance with Dragons']
}, {
  id: 3,
  name: 'Stephen King',
  age: 60,
  books: ['The Green Mile', 'Carrie']
}];

const resolvers = {
  Query: {
    authors: () => authors,
    author: (root, args) => {
      const id = args.id;
      return authors.find(author => author.id === id);
    }
  }
};

export default resolvers;