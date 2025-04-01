import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import NewCommentForm from "./NewCommentForm";

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
          <div className="comment" key={comment.comment_id}>
            <p className="left-align-italics">
              {String(new Date(comment.created_at)).split("+")[0]},{" "}
              {comment.author}:
            </p>
            <p className="right-align"> {comment.body}</p>
            <p className="right-align"> ❤️ {comment.votes} </p>
          </div>
        );
      })}
    </section>
  );
}

export default CommentsSection;
