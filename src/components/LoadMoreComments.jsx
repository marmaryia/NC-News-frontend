import { getCommentsByArticleId } from "../api";

function LoadMoreComments({ article_id, setComments, p }) {
  function handleLoadMore() {
    getCommentsByArticleId(article_id, p).then((commentsFromApi) => {
      setComments((currentComments) => {
        return [...currentComments, ...commentsFromApi];
      });
    });
  }

  return (
    <button className="more-comments-button" onClick={handleLoadMore}>
      More comments
    </button>
  );
}

export default LoadMoreComments;
