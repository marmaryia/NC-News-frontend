# NC News (frontend)

This is a single-page application mimicking a news website / discussion board, built with React.

Deployed version:
https://maryia-nc-news.netlify.app/ \
(Note: the backend service spins down after a period of inactivity and can take about a minute to spin back up.)

The backend API: https://github.com/marmaryia/NC-News-backend

## Technologies & libraries used

- JavaScript, CSS & HTML
- React
- Component libraries: MUI, Lottie-React

## Features

- **Home page:** users can view a list of all available articles, sorted from newest to oldest by default and paginated. The page also supports filtering articles by topic and customisation of the sorting parameter and direction.
- **Article pages:** accessed by clicking an article card on the home page, they display the requested article and the associated comments.
- **Commenting:** users can add comments on articles or delete their own comments.
- **Voting:** users can up- or downvote an article or a comment. Vote count is rendered optimistically while an API call occurs. Although there is currently no backend functionality to associate votes with a user, only one up- or downvote is allowed per article/comment per page load.
- **User profiles:** while the app does not support authentication, users can choose from available user profiles in order to add or remove comments.
- **Responsiveness:** the layout is adaptable for desktop and mobile screen sizes.
- **User experience:** the app makes users aware when data is loading, whether an action has been successful, whether there has been an error, if a user tried to access a non-existent path or enter an invalid search query.

## Running the code locally

Minimum recommended Node version: v23.6.0

To run locally, clone the repository and navigate to the directory, then in the terminal:

- npm install (to install react, react-dom and dependencies);
- npm run dev (to serve the app).

## Acknowledment

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).
