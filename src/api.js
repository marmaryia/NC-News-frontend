import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://be-nc-news-jql4.onrender.com/api",
  timeout: 50000,
});

export function getAllArticles(p, topic, sort_by, order) {
  return apiClient
    .get("/articles", { params: { p, topic, sort_by } })
    .then(({ data }) => {
      return data;
    });
}

export function getArticleById(article_id) {
  return apiClient
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
}

export function getCommentsByArticleId(article_id) {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
}

export function patchLikesCount(article_id, vote) {
  return apiClient
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data: { article } }) => {
      return article;
    });
}

export function getAllUsers() {
  return apiClient.get("/users").then(({ data: { users } }) => {
    return users;
  });
}

export function postComment(article_id, username, body) {
  return apiClient
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
}

export function deleteComment(comment_id) {
  return apiClient.delete(`/comments/${comment_id}`);
}

export function getAllTopics() {
  return apiClient.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
}
