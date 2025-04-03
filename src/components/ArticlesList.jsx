import { use, useEffect, useState } from "react";
import { getAllArticles, getAllTopics } from "../api";
import { Link, useSearchParams } from "react-router-dom";
import ArticleTitleCard from "./ArticleTitleCard";
import PaginationLine from "./Pagination";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesSorting from "./ArticlesSorting";
import useApiRequest from "../useApiRequest";
import Error from "./Error";

function ArticlesList() {
  const [articlesData, setArticlesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    data: topicsList,
    isLoading: topicsAreLoading,
    error: topicsError,
  } = useApiRequest(getAllTopics);

  const [topicDescription, setTopicDescription] = useState("");

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
    setError(null);
    setIsLoading(true);
    getAllArticles(p, topic, sort_by, order)
      .then((dataFromApi) => {
        setArticlesData(dataFromApi);
      })
      .catch((error) => {
        setError({ code: error.response.status, msg: error.response.data.msg });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  useEffect(() => {
    const topic = searchParams.get("topic");
    setTopicDescription(() => {
      if (Array.isArray(topicsList)) {
        for (const topicFromList of topicsList) {
          if (topicFromList.slug === topic) {
            return topicFromList.description;
          }
        }
      }
      return "Everything";
    });
  }, [searchParams, topicsList]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || topicsError) {
    return <Error error={error || topicsError} />;
  }

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
          pageCount={Math.ceil(articlesData.total_count / limit)}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          queries={queries}
          setQueries={setQueries}
        />
      </div>
      <div className="titles-container">
        {articlesData.articles.map((article) => {
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
          pageCount={Math.ceil(articlesData.total_count / limit)}
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
