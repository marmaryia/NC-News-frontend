import { useEffect, useState } from "react";
import { getArticleById, patchLikesCount } from "../api";
import { useParams } from "react-router-dom";
import CommentsSection from "./CommentsSection";
import Voting from "./Voting";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const [likesCount, setLikesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setLikesCount(articleFromApi.votes);
      setIsLoading(false);
    });
  }, []);

  function handleShowingComments() {
    setShowComments(!showComments);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <article>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} alt={article.title} />
        <div className="article-info">
          <p className="left-align-italics">
            {String(new Date(article.created_at)).split("+")[0]}
          </p>
          <p className="right-align-italics">Topic: {article.topic}</p>
        </div>
        <p className="left-align">{article.body}</p>
        <p className="right-align-italics">By: {article.author}</p>
        <p>
          📑 {article.comment_count} | ❤️ {likesCount}
        </p>
      </article>
      <Voting id={article_id} setLikesCount={setLikesCount} />
      <button className="comment-view-button" onClick={handleShowingComments}>
        {showComments ? "Hide comments" : "View comments"}
      </button>
      <section style={{ display: showComments ? "" : "none" }}>
        <CommentsSection article_id={article_id} />
      </section>
    </section>
  );
}

export default ArticlePage;
