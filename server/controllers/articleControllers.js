import expressAsyncHandler from "express-async-handler";
import ARTICLE from "../model/Article.js";

export const addArticle = expressAsyncHandler(async (req, res) => {
  const article = await ARTICLE.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file.originalname,
  });

  if (article) {
    res.status(201).json(article);
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
});

export const getAllArticle = expressAsyncHandler(async (req, res) => {
  const articles = await ARTICLE.find({});

  if (articles.length > 0) {
    res.status(200).json(articles);
  } else {
    res.status(400).json({ message: "No Article found" });
  }
});
