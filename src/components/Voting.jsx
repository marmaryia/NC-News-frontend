import { patchLikesCount } from "../api";

function Voting({ id, setLikesCount }) {
  function handleVote(e) {
    const vote = Number(e.target.value);

    setLikesCount((currentLikes) => currentLikes + vote);
    patchLikesCount(id, vote).catch((err) => {
      setLikesCount((currentLikesCount) => currentLikesCount - vote);
      setError("An error occurred. Please try again!");
    });
  }

  return (
    <div className="voting-container">
      <button className="voting-button" onClick={handleVote} value={1}>
        + 1 💜
      </button>
      <button className="voting-button" onClick={handleVote} value={-1}>
        - 1 💜
      </button>
    </div>
  );
}

export default Voting;
