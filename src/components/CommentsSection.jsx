import { getCommentsByArticleId } from "../api";
import NewCommentForm from "./NewCommentForm";
import CommentCard from "./CommentCard";
import LoadMoreComments from "./LoadMoreComments";
import useApiRequest from "../useApiRequest";
import "../styles/Comments.css";
import LoadingAnimation from "./LoadingAnimation";

function CommentsSection({ article_id, commentCount, setCommentCount }) {
  const {
    data: comments,
    setData: setComments,
    isLoading,
    error,
  } = useApiRequest(getCommentsByArticleId, article_id, 1);

  if (isLoading) {
    return (
      <section className="comments-container">
        <LoadingAnimation />
      </section>
    );
  }

  return (
    <section className="comments-container">
      {
        <NewCommentForm
          article_id={article_id}
          setCommentCount={setCommentCount}
          setComments={setComments}
        />
      }
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setCommentCount={setCommentCount}
            setComments={setComments}
          />
        );
      })}
      {comments.length < commentCount ? (
        <LoadMoreComments
          article_id={article_id}
          p={comments.length / 10 + 1}
          setComments={setComments}
        />
      ) : null}
    </section>
  );
}

export default CommentsSection;
