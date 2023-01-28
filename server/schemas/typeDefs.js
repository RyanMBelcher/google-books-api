const { gql } = require('apollo-server-express');

// Query
// me: returns a User type

// Mutation
// login: accepts and email and password as params; returns an auth type
// addUser: accepts a username, email, and password as params; returns an auth type
// saveBook: accepts a book author's array, description, title, bookId, image and link as params; returns User type
// removeBook: accepts a book's bookId as param; returns a User type

// User
// id
// username
// email
// bookCount
// savedBooks (array of Book)

// Book
// bookId
// authors
// description
// title
// image
// link

// Auth
// token
// User (references user)

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input bookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: string!
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        removeBook(bookId: ID!): User
    }
`;

module.exports