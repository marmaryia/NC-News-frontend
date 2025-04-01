import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { postComment } from "../api";

function NewCommentForm({ article_id, setCommentCount }) {
  const [commentText, setCommentText] = useState("");
  const [message, setMessage] = useState("");
  const { loggedInUser } = useContext(LoggedInUserContext);

  function handleChange(e) {
    setMessage("");
    setCommentText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postComment(article_id, loggedInUser.username, commentText)
      .then(() => {
        setCommentCount((current) => current + 1);
        setCommentText("");
        setMessage("Comment submitted successfully");
      })
      .catch(() => {
        setMessage("Something went wrong");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment-body">Enter your comment here:</label>
      <textarea
        onChange={handleChange}
        className="comment-body-input"
        id="comment-body"
        rows="4"
        value={commentText}
      />
      <br />
      {message}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default NewCommentForm;
