export default function BrandMark({ brand, decorative = false }) {
  return <div className={`brand-mark${brand.theme === 'dark' ? ' brand-mark--dark' : ''}${brand.pending ? ' brand-mark--pending' : ''}`}>
    {brand.logo
      ? <img src={brand.logo} alt={decorative ? '' : brand.alt || `Logo ${brand.name}`} />
      : <span aria-label={decorative ? undefined : brand.alt || brand.name}>{brand.name}<small>Logo oficial pendente</small></span>}
  </div>;
}
