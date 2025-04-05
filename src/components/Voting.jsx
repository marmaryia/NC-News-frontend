import { useState } from "react";

function Voting({ id, setLikesCount, apiFunction, children }) {
  const [error, setError] = useState(false);
  const [remainingVotes, setRemainingVotes] = useState({ up: 1, down: 1 });

  function handleVote(e) {
    setError(false);
    const vote = Number(e.target.value);

    setRemainingVotes((current) => {
      return { up: current.up - vote, down: current.down + vote };
    });

    setLikesCount((currentLikes) => currentLikes + vote);
    apiFunction(id, vote).catch((err) => {
      setLikesCount((currentLikesCount) => currentLikesCount - vote);
      setError("An error occurred. Please try again later");
      setRemainingVotes((current) => {
        return { up: current.up + vote, down: current.down - vote };
      });
    });
  }

  return (
    <>
      <div className="voting-container">
        {error ? <p className="voting-error-message">{error}</p> : null}
        <button
          className="voting-button"
          onClick={handleVote}
          value={-1}
          disabled={remainingVotes.down ? false : true}
        >
          ➖
        </button>
        {children}
        <button
          className="voting-button"
          onClick={handleVote}
          value={+1}
          disabled={remainingVotes.up ? false : true}
        >
          ➕
        </button>
      </div>
    </>
  );
}

export default Voting;
