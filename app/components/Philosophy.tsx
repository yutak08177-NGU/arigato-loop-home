import ScrollReveal from "./ScrollReveal";

export default function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <div className="philosophy-inner">
        <div>
          <ScrollReveal variant="gold-line">
            <div className="section-label">Philosophy</div>
          </ScrollReveal>
          <ScrollReveal variant="fade-blur" delay={1} duration="slow">
            <h2 className="section-heading">蓄積から、循環へ。</h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={2}>
            <p className="section-text">
              貨幣経済は「増やすこと」を前提に設計されました。しかし、有限の地球で無限の成長を追求するシステムは、いつか必ず行き詰まります。
            </p>
          </ScrollReveal>
          <br />
          <ScrollReveal variant="fade-up" delay={3}>
            <p className="section-text">
              私たちは「感謝」を軸にした新しい経済の仕組みを提案します。感謝は使っても減らない。むしろ循環するほど、豊かさが生まれる。蓄積するのではなく、回し続ける。それが
              eienloop の原点です。
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal
          className="philosophy-visual"
          variant="fade-scale"
          delay={2}
          duration="slower"
        >
          <div className="gratitude-loop">
            <div className="loop-ring" />
            <div className="loop-ring" />
            <div className="loop-ring" />
            <div className="loop-dot" />
            <div className="loop-dot" />
            <div className="loop-dot" />
            <div className="loop-dot" />
            <div className="loop-center">∞</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
