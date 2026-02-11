import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    label: "Mission",
    title: "感謝でつながる\n経済をつくる",
    text: "お金ではなく、感謝を通じて人と人がつながり、価値を循環させる新しい経済システムを実現する。",
    delay: 1,
  },
  {
    label: "Vision",
    title: "お金がなくても\n生きていける世界",
    text: "感謝が可視化され、信頼と貢献が正当に評価される社会。誰もが安心して与え、受け取れる関係性のインフラを構築する。",
    delay: 2,
  },
  {
    label: "Values",
    title: "循環を\n設計する",
    text: "溜め込まず、流れ続ける仕組みをつくる。感謝ファーストで、本物の関係性を大切にし、実験し続ける。",
    delay: 3,
  },
] as const;

export default function MVV() {
  return (
    <section className="section" id="mvv">
      <div className="mvv">
        <ScrollReveal variant="gold-line">
          <div className="section-label">Mission / Vision / Values</div>
        </ScrollReveal>
        <ScrollReveal variant="fade-blur" delay={1} duration="slow">
          <h2 className="section-heading">私たちが掲げるもの</h2>
        </ScrollReveal>
        <div className="mvv-grid">
          {cards.map((card) => (
            <ScrollReveal
              key={card.label}
              className="mvv-card"
              variant="fade-scale"
              delay={card.delay}
            >
              <div className="mvv-card-label">{card.label}</div>
              <div className="mvv-card-title">
                {card.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="mvv-card-text">{card.text}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
