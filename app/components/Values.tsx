import ScrollReveal from "./ScrollReveal";

const values = [
  { number: "01", title: "感謝ファースト", desc: "すべての意思決定の起点は「感謝が生まれるか」" },
  { number: "02", title: "循環を設計する", desc: "溜め込まず、流れ続ける仕組みをつくる" },
  { number: "03", title: "本物の関係性", desc: "数字のためではなく、人のためにつながる" },
  { number: "04", title: "実験し続ける", desc: "正解がない領域だからこそ、小さく試して学ぶ" },
  { number: "05", title: "透明であること", desc: "チームにも、ユーザーにも、社会にも" },
];

export default function Values() {
  return (
    <section className="section values">
      <div className="values-inner">
        <ScrollReveal variant="gold-line">
          <div className="section-label">Our Values</div>
        </ScrollReveal>
        <ScrollReveal variant="fade-blur" delay={1} duration="slow">
          <h2 className="section-heading">5つの行動指針</h2>
        </ScrollReveal>
        <div className="values-list">
          {values.map((value, i) => (
            <ScrollReveal
              key={value.number}
              className="value-item"
              variant="fade-up"
              delay={i + 1}
            >
              <div className="value-number">{value.number}</div>
              <div className="value-title">{value.title}</div>
              <div className="value-desc">{value.desc}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
