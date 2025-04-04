function Error({ error }) {
  return (
    <section className="vertically-centered-section">
      <h2>{error.code}</h2>
      <h3> {error.msg}</h3>
    </section>
  );
}

export default Error;
