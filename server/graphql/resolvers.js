const Article = require('../db/schema/article.js');

const resolvers = {
    Query: {
        articles: async (_, __, ___) => {
            try {
                let articles = await Article.find({}).exec();
                articles = articles.map((article) => ({
                    id: article.id,
                    title: article.title,
                    content: article.content,
                }));
                return articles;
            } catch (err) {
                // TODO: Should throw error back to client
                console.log(err);
            }
        },
    },
    Mutation: {
        createArticle: async (_, { title, content }, ___) => {
            try {
                let article = new Article({ title, content });
                article = await article.save();

                console.log(article);

                return { success: true, message: '' };
            } catch (err) {
                // TODO: Should throw error back to client
                console.log(err);
            }
        },
        updateArticle: async (_, __, ___) => {

        },
    },
};

module.exports = resolvers;
