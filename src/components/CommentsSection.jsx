import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import NewCommentForm from "./NewCommentForm";
import CommentCard from "./CommentCard";

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
          <CommentCard comment={comment} setCommentCount={setCommentCount} />
        );
      })}
    </section>
  );
}

export default CommentsSection;
