function About() {
  return (
    <section className="top-level-section">
      <h1>About</h1>
      <p>
        This is a single-page application mimicking a news website / discussion
        board, built with React.
      </p>
      <h2>Technologies & libraries used</h2>
      <ul className="tech-list">
        <li>JavaScript, CSS & HTML</li>
        <li>React</li>
        <li>Component libraries: MUI, Lottie-React</li>
      </ul>
      <h2>Features</h2>
      <ul className="features-list">
        <li>
          <b>Home page:</b> users can view a list of all available articles,
          sorted from newest to oldest by default and paginated. The page also
          supports filtering articles by topic and customisation of the sorting
          parameter and direction.
        </li>
        <li>
          <b>Article pages: </b>accessed by clicking an article card on the home
          page, they display the requested article and the associated comments.
        </li>
        <li>
          <b>Commenting: </b> users can add comments on articles or delete their
          own comments.
        </li>
        <li>
          <b>Voting: </b> users can up- or downvote an article or a comment.
          Vote count is rendered optimistically while an API call occurs.
          Although there is currently no backend functionality to associate
          votes with a user, only one up- or downvote is allowed per
          article/comment per page load.
        </li>
        <li>
          <b>User profiles:</b> while the app does not support authentication,
          users can choose from available user profiles in order to add or
          remove comments.
        </li>
        <li>
          <b>Responsiveness:</b> the layout is adaptable for desktop and mobile
          screen sizes.
        </li>
        <li>
          <b>User experience:</b> the app makes users aware when data is
          loading, whether an action has been successful, whether there has been
          an error, if a user tried to access a non-existent path or enter an
          invalid search query.
        </li>
      </ul>
      <h2>Note</h2>
      <p>
        The backend service spins down after a period of inactivity, and it may
        take about a minute to spin back upon opening the web-site.
      </p>
      <h2>Acknowledgement</h2>
      <p>
        This portfolio project was created as part of a Digital Skills Bootcamp
        in Software Engineering provided by Northcoders.
      </p>
    </section>
  );
}

export default About;
