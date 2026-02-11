import ScrollReveal from "./ScrollReveal";

const companyData = [
  { label: "会社名", value: "eienloop株式会社" },
  { label: "設立", value: "2026年1月21日" },
  { label: "所在地", value: "東京都品川区八潮5-10-52-505" },
  {
    label: "事業内容",
    value: (
      <>
        感謝経済プラットフォームの企画・開発・運営
        <br />
        データ分析・コンサルティング
        <br />
        ソーシャルメディアの企画・運営
        <br />
        人材マッチングサービス
      </>
    ),
  },
  { label: "決算月", value: "1月" },
];

export default function Company() {
  return (
    <section className="section company" id="company">
      <div className="company-inner">
        <ScrollReveal variant="gold-line">
          <div className="section-label">Company</div>
        </ScrollReveal>
        <ScrollReveal variant="fade-blur" delay={1} duration="slow">
          <h2 className="section-heading">会社概要</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={2} duration="slow">
          <dl className="company-table">
            {companyData.map((row) => (
              <div className="company-row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
