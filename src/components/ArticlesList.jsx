import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import { Link } from "react-router-dom";

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
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <div className="title-card">
                <h2 className="title">{article.title}</h2>
                <p className="date">
                  Date: {String(new Date(article.created_at)).split("+")[0]}
                </p>
                <p>Topic: {article.topic}</p>
                <p>By: {article.author}</p>
                <p>
                  📑: {article.comment_count} | ❤️: {article.votes}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ArticlesList;
