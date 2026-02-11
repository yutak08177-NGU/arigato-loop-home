export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-circle" />
        <div className="hero-circle" />
        <div className="hero-circle" />
      </div>
      <div className="hero-content">
        <div className="hero-tag">eienloop Inc.</div>
        <h1 className="hero-title">
          <em>感謝</em>でつながる
          <br />
          経済をつくる
        </h1>
        <p className="hero-subtitle">
          お金ではなく、感謝を通じて人と人がつながり、
          <br />
          価値を循環させる新しい経済システムを実現する。
        </p>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
