export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return <div className={`section-header section-header--${align}`}>{eyebrow && <span className="kicker">{eyebrow}</span>}<h2>{title}</h2>{description && <p className="section-copy">{description}</p>}</div>;
}
