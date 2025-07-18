const LandingPage = ({ onGetStarted }) => {
  return (
    <div className={styles.landing.container}>
      <div className={styles.landing.backgroundOverlay}></div>
      <div className={styles.landing.content}>
        <h1 className={styles.landing.title}>Paradise Nursery</h1>
        <p className={styles.landing.subtitle}>
          Welcome to Paradise Nursery, where green dreams come alive! We
          specialize in bringing nature's beauty into your home with our
          carefully curated collection of houseplants. From air-purifying snake
          plants to stunning flowering varieties, we have everything you need to
          create your own indoor paradise.
        </p>
        <button onClick={onGetStarted} className={styles.landing.button}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export { LandingPage };
