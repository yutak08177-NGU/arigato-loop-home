import ScrollReveal from "./ScrollReveal";
import type { RevealVariant } from "./ScrollReveal";

const businessCards: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  text: string;
  delay: number;
  variant: RevealVariant;
}[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "感謝経済プラットフォーム",
    sub: "Gratitude Economy Platform",
    text: "日常の中で生まれる「感謝」を記録・可視化するプラットフォームを開発。30日で消失する感謝ポイントにより、継続的な信頼関係を評価し、人間性を重視した人材マッチングサービスを提供します。",
    delay: 1,
    variant: "fade-left",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "データ分析・コンサルティング",
    sub: "Data Analytics & Consulting",
    text: "Power BI・Tableauでのダッシュボード構築、Pythonを活用したデータクレンジング・予測モデル構築など、企業のデータ活用を多角的に支援します。",
    delay: 2,
    variant: "fade-right",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "SNS企画・運営",
    sub: "Social Media Management",
    text: "ソーシャルメディアアカウントの企画・制作・運営代行。データに基づいたコンテンツ戦略で、フリーランスやスタートアップの情報発信を支援します。",
    delay: 3,
    variant: "fade-left",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "人材マッチング",
    sub: "Talent Matching",
    text: "感謝データに基づく人材マッチング機能を通じて、スキルだけでなく人間性・信頼性を重視した採用体験を実現します。",
    delay: 4,
    variant: "fade-right",
  },
];

export default function Business() {
  return (
    <section className="section" id="business">
      <div className="business-inner">
        <ScrollReveal variant="gold-line">
          <div className="section-label">Business</div>
        </ScrollReveal>
        <ScrollReveal variant="fade-blur" delay={1} duration="slow">
          <h2 className="section-heading">事業内容</h2>
        </ScrollReveal>
        <div className="business-cards">
          {businessCards.map((card) => (
            <ScrollReveal
              key={card.sub}
              className="business-card"
              variant={card.variant}
              delay={card.delay}
            >
              <div className="business-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <div className="business-card-sub">{card.sub}</div>
              <p>{card.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
