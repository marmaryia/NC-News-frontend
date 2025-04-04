function ArticleTitleCard({ article }) {
  return (
    <div className="title-card">
      <h2 className="title">{article.title}</h2>
      <p className="date">
        {String(new Date(article.created_at)).split("+")[0]}
      </p>
      <p className="topic">
        {article.topic[0].toUpperCase() + article.topic.slice(1)}
      </p>
      <p className="author">By: {article.author}</p>
      <p className="votes">
        📑 {article.comment_count} ❤️ {article.votes}
      </p>
    </div>
  );
}

export default ArticleTitleCard;
