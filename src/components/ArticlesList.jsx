import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import { Link } from "react-router-dom";
import ArticleTitleCard from "./ArticleTitleCard";
import PaginationLine from "./Pagination";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesCount, setArticlesCount] = useState(0);

  useEffect(() => {
    getAllArticles().then(({ articles, total_count }) => {
      setArticles(articles);
      setArticlesCount(total_count);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(articlesCount);
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
              <ArticleTitleCard article={article} />
            </Link>
          );
        })}
      </div>
      <PaginationLine pageCount={Math.ceil(articlesCount / articles.length)} />
    </section>
  );
}

export default ArticlesList;
