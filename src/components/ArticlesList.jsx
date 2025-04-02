import { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleTitleCard from "./ArticleTitleCard";
import PaginationLine from "./Pagination";
import ArticlesFilter from "./ArticlesFilter";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesCount, setArticlesCount] = useState(0);
  const [topicsList, setTopicsList] = useState("");
  const [topicsAreLoading, setTopicsAreLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("p") || 1);
  const limit = searchParams.get("limit") || 10;
  const topic = searchParams.get("topic");

  useEffect(() => {
    const p = searchParams.get("p");
    setPage(p || 1);

    getAllArticles(p, topic || null).then(({ articles, total_count }) => {
      setArticles(articles);
      setArticlesCount(total_count);
      setIsLoading(false);
    });
  }, [searchParams]);

  useEffect(() => {
    setTopicsAreLoading(true);
    getAllTopics().then((topicsFromApi) => {
      setTopicsList(topicsFromApi);
      setTopicsAreLoading(false);
    });
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", page);
    setSearchParams(newParams);
  }, [page]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>{topic ? topic : "Everything"}</h1>
      <div className="articles-nav-bar">
        <div className="articles-filter">
          <ArticlesFilter
            topicsList={topicsList}
            topicsAreLoading={topicsAreLoading}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            setPage={setPage}
          />
        </div>
        <div className="pagination-line">
          <PaginationLine
            pageCount={Math.ceil(articlesCount / limit)}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            page={page}
            setPage={setPage}
          />
        </div>
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
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
}

export default ArticlesList;
