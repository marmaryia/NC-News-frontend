import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleTitleCard from "./ArticleTitleCard";
import PaginationLine from "./Pagination";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesCount, setArticlesCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const p = searchParams.get("p");
  const limit = searchParams.get("limit") || 10;

  useEffect(() => {
    getAllArticles(p).then(({ articles, total_count }) => {
      setArticles(articles);
      setArticlesCount(total_count);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>The latest</h1>
      <div className="pagination-line">
        <PaginationLine
          pageCount={Math.ceil(articlesCount / limit)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
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
      <div className="pagination-line">
        <PaginationLine
          pageCount={Math.ceil(articlesCount / limit)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </section>
  );
}

export default ArticlesList;
