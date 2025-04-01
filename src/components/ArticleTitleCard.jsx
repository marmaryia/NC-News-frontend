function ArticleTitleCard({ article }) {
  return (
    <div className="title-card">
      <h2 className="title">{article.title}</h2>
      <p className="date">
        {String(new Date(article.created_at)).split("+")[0]}
      </p>
      <p>By: {article.author}</p>
      <p>On: {article.topic}</p>
      <p>
        📑 {article.comment_count} | ❤️ {article.votes}
      </p>
    </div>
  );
}

export default ArticleTitleCard;
