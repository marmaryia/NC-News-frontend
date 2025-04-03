import { useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleTitleCard from "./ArticleTitleCard";
import PaginationLine from "./Pagination";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesSorting from "./ArticlesSorting";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesCount, setArticlesCount] = useState(0);
  const [topicsList, setTopicsList] = useState([]);
  const [topicsAreLoading, setTopicsAreLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [queries, setQueries] = useState({
    p: Number(searchParams.get("p") || 1),
    topic: searchParams.get("topic" || ""),
    sort_by: searchParams.get("sort_by") || "created_at",
    order: searchParams.get("order") || "desc",
  });

  const limit = searchParams.get("limit") || 10;

  useEffect(() => {
    const p = searchParams.get("p");
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    const topic = searchParams.get("topic");

    setQueries({
      p: Number(p || 1),
      topic: topic || "",
      sort_by: sort_by || "created_at",
      order: order || "desc",
    });

    getAllArticles(p, topic, sort_by, order).then(
      ({ articles, total_count }) => {
        setArticles(articles);
        setArticlesCount(total_count);
        setIsLoading(false);
      }
    );
  }, [searchParams]);

  useEffect(() => {
    setTopicsAreLoading(true);
    getAllTopics().then((topicsFromApi) => {
      setTopicsList(topicsFromApi);
      setTopicsAreLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let topicDescription;
  topicsList.forEach((topicFromList) => {
    if (topicFromList.slug === searchParams.get("topic")) {
      topicDescription = topicFromList.description;
    }
  });

  return (
    <section>
      <h1>{topicDescription ? topicDescription : "Everything"}</h1>
      <div className="articles-nav-bar">
        <div className="articles-filter">
          <ArticlesFilter
            topicsList={topicsList}
            topicsAreLoading={topicsAreLoading}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            queries={queries}
            setQueries={setQueries}
          />
        </div>
        <div className="articles-sort">
          <ArticlesSorting
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            queries={queries}
            setQueries={setQueries}
          />
        </div>
      </div>
      <div className="pagination-line">
        <PaginationLine
          pageCount={Math.ceil(articlesCount / limit)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          queries={queries}
          setQueries={setQueries}
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
          queries={queries}
          setQueries={setQueries}
        />
      </div>
    </section>
  );
}

export default ArticlesList;
