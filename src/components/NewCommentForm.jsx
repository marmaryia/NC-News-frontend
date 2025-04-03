import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUserContext";
import { postComment } from "../api";
import { Link } from "react-router-dom";

function NewCommentForm({ article_id, setCommentCount }) {
  const [commentText, setCommentText] = useState("");
  const [message, setMessage] = useState("");
  const { loggedInUser } = useContext(LoggedInUserContext);

  function handleChange(e) {
    setCommentText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting your comment...");
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

  if (!loggedInUser.username) {
    return (
      <p>
        If you would like to leave your own comment, please log in{" "}
        <Link to="/login">here</Link>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="new-comment-form">
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
      <button
        type="submit"
        className="submit-button"
        disabled={commentText ? false : true}
      >
        Submit
      </button>
    </form>
  );
}

export default NewCommentForm;
