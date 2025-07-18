const LandingPage = ({ dispatch }) => {
  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">
          Welcome to Paradise Nursery, where green dreams come alive! We
          specialize in bringing nature's beauty into your home with our
          carefully curated collection of houseplants. From air-purifying snake
          plants to stunning flowering varieties, we have everything you need to
          create your own indoor paradise.
        </p>
        <button
          onClick={() => dispatch(actions.setPage("products"))}
          className="landing-button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export { LandingPage };
