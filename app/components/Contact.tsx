import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <ScrollReveal variant="gold-line">
          <div className="section-label">Contact</div>
        </ScrollReveal>
        <ScrollReveal variant="fade-blur" delay={1} duration="slow">
          <h2 className="section-heading">お問い合わせ</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={2}>
          <p className="section-text">
            事業に関するご質問・ご相談など、
            <br />
            お気軽にお問い合わせください。
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-scale" delay={3}>
          <a href="mailto:info@eienloop.com" className="contact-btn">
            <span>お問い合わせはこちら</span>
            <svg viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
