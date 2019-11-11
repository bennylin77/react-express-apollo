const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Query {
        articles: [Article]!
        article(id: ID!): Article
        me: User
    }
    
    type Mutation {
        createArticle(input: ArticleInput): Response!
        updateArticle(articleId: ID!, input: ArticleInput): Response!
    } 
    
    type Article {
        id: ID!
        title: String,
        content: String,
    }

    input ArticleInput {
        title: String,
        content: String,
    }
 
    type Response {
        success: Boolean!
        message: String
    }   

    type User {
        id: ID!
        email: String!
    }
`;
module.exports = typeDefs;
