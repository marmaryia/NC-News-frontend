import { useEffect, useState } from "react";
import { getAllArticles } from "../api";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>The latest</h1>
      <div className="titles-container">
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="title-card">
              <h2 className="title">{article.title}</h2>
              <p>Date: {String(new Date(article.created_at)).split("+")[0]}</p>
              <p>Topic: {article.topic}</p>
              <p>By: {article.author}</p>
              <p>
                📑: {article.comment_count} | ❤️: {article.votes}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ArticlesList;
