import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <p>Topic: {article.topic}</p>
      <img src={article.article_img_url} alt={article.title} />

      <p>{String(new Date(article.created_at)).split("+")[0]}</p>

      <p>{article.body}</p>
      <p className="right-align-italics">By: {article.author}</p>
      <p>
        📑: {article.comment_count} | ❤️: {article.votes}
      </p>
    </article>
  );
}

export default ArticlePage;
