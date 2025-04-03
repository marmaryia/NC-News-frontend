import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { deleteComment } from "../api";

function CommentCard({ comment, setCommentCount }) {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage("Deleting...");
    deleteComment(comment.comment_id)
      .then(() => {
        setCommentCount((current) => current - 1);
        setMessage("");
      })
      .catch(() => {
        setMessage(
          "Something went wrong. Please check your internet connection and try again later"
        );
      });
  }

  return (
    <div className="comment" key={comment.comment_id}>
      <div className="comment-top-line">
        <p className="left-align-italics">
          {String(new Date(comment.created_at)).split("+")[0]}, {comment.author}
          :
        </p>
        {loggedInUser.username === comment.author ? (
          <button
            onClick={handleClick}
            className="delete-comment-button"
            title="Delete comment"
          >
            ✖️
          </button>
        ) : null}
      </div>
      <div className="comment-delete-message">{message}</div>

      <p className="right-align"> {comment.body}</p>
      <p className="right-align"> ❤️ {comment.votes} </p>
    </div>
  );
}

export default CommentCard;
