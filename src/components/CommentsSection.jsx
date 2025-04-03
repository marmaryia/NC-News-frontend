import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import NewCommentForm from "./NewCommentForm";
import CommentCard from "./CommentCard";
import LoadMoreComments from "./LoadMoreComments";

function CommentsSection({ article_id, commentCount, setCommentCount }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [commentCount]);

  if (isLoading) {
    return <section className="comments-container">Loading...</section>;
  }

  return (
    <section className="comments-container">
      {
        <NewCommentForm
          article_id={article_id}
          setCommentCount={setCommentCount}
        />
      }
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setCommentCount={setCommentCount}
          />
        );
      })}
      {comments.length < commentCount ? (
        <LoadMoreComments
          article_id={article_id}
          setComments={setComments}
          p={comments.length / 10 + 1}
        />
      ) : null}
    </section>
  );
}

export default CommentsSection;
