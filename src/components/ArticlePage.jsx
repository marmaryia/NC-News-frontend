import { useEffect, useState } from "react";
import { getArticleById, patchArticleLikesCount } from "../api";
import { useParams } from "react-router-dom";
import CommentsSection from "./CommentsSection";
import Voting from "./Voting";
import useApiRequest from "../useApiRequest";
import Error from "./Error";
import "../styles/ArticlePage.css";
import LoadingAnimation from "./LoadingAnimation";

function ArticlePage() {
  const { article_id } = useParams();
  const {
    data: article,
    isLoading,
    error,
  } = useApiRequest(getArticleById, article_id);
  const [likesCount, setLikesCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (article) {
      setLikesCount(article.votes);
      setCommentCount(article.comment_count);
    }
  }, [article]);

  function handleShowingComments() {
    setShowComments(!showComments);
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section className="top-level-section">
      <article>
        <div className="article-info">
          <p className="left-align-italics">
            {String(new Date(article.created_at)).split("+")[0]}
          </p>
          <p className="right-align-italics">
            {article.topic[0].toUpperCase() + article.topic.slice(1)}
          </p>
        </div>
        <h1>
          {article.title}{" "}
          <span className="comment-count">📑 {commentCount}</span>
        </h1>
        <img src={article.article_img_url} alt={article.title} />
        <p className="left-align">{article.body}</p>
        <p className="right-align-italics">By {article.author}</p>
      </article>

      <Voting
        id={article_id}
        setLikesCount={setLikesCount}
        apiFunction={patchArticleLikesCount}
      >
        <p className="likes-indicator">❤️ {likesCount}</p>
      </Voting>
      <button className="comment-view-button" onClick={handleShowingComments}>
        {showComments ? "Hide comments" : "View comments"}
      </button>

      <section style={{ display: showComments ? "" : "none" }}>
        <CommentsSection
          article_id={article_id}
          setCommentCount={setCommentCount}
          commentCount={commentCount}
        />
      </section>
    </section>
  );
}

export default ArticlePage;
