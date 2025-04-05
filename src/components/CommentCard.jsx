import { useContext, useState, useEffect } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { deleteComment, patchCommentLikesCount } from "../api";
import Voting from "./Voting";

function CommentCard({ comment, setCommentCount, setComments }) {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [message, setMessage] = useState("");
  const [likesCount, setLikesCount] = useState(0);

  function handleClick() {
    setMessage("Deleting...");
    deleteComment(comment.comment_id)
      .then(() => {
        setCommentCount((current) => current - 1);
        setComments((currentComments) => {
          const newComments = [...currentComments];
          for (let i = 0; i < newComments.length; i++) {
            if (newComments[i].comment_id === comment.comment_id) {
              newComments.splice(i, 1);
              break;
            }
          }
          return newComments;
        });
        setMessage("");
      })
      .catch(() => {
        setMessage(
          "Something went wrong. Please check your internet connection and try again later"
        );
      });
  }

  useEffect(() => {
    setLikesCount(comment.votes);
  }, []);

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
      <Voting
        id={comment.comment_id}
        setLikesCount={setLikesCount}
        apiFunction={patchCommentLikesCount}
      >
        <p className="comment-likes-indicator"> ❤️ {likesCount}</p>
      </Voting>
    </div>
  );
}

export default CommentCard;
