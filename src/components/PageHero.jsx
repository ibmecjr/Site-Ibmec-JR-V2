export default function PageHero({ eyebrow, title, description, children }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}{children}</div></section>;
}
