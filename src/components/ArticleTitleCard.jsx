import formatDate from "../utils";

function ArticleTitleCard({ article, i }) {
  return (
    <div className="title-card">
      <h2 className="title">{article.title}</h2>
      <p className="date">{formatDate(article.created_at).day}</p>
      <p className="topic">
        {article.topic[0].toUpperCase() + article.topic.slice(1)}
      </p>
      <p className="author">By: {article.author}</p>
      <p className="votes">
        📑{"\u00A0"}
        {article.comment_count} ❤️{"\u00A0"}
        {article.votes}
      </p>
      {[0, 6].includes(i) ? (
        <img src={article.article_img_url} className="title-image" />
      ) : null}
    </div>
  );
}

export default ArticleTitleCard;
