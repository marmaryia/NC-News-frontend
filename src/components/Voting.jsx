import { useState } from "react";
import { patchLikesCount } from "../api";

function Voting({ id, setLikesCount }) {
  const [error, setError] = useState(false);

  function handleVote(e) {
    setError(false);
    const vote = Number(e.target.value);
    setLikesCount((currentLikes) => currentLikes + vote);
    patchLikesCount(id, vote).catch((err) => {
      setLikesCount((currentLikesCount) => currentLikesCount - vote);
      setError("An error occurred. Please try again later");
    });
  }

  return (
    <>
      <div className="voting-container">
        <button className="voting-button" onClick={handleVote} value={1}>
          + 1 ❤️
        </button>
        <button className="voting-button" onClick={handleVote} value={-1}>
          – 1 ❤️
        </button>
      </div>
      {error ? <p className="right-align">{error}</p> : null}
    </>
  );
}

export default Voting;
