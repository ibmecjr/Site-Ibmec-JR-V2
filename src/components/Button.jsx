import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({ as = 'auto', to, href, variant = 'primary', className = '', children, showArrow = true, ...props }) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = <>{children}{showArrow && <ArrowRight className="button__arrow" aria-hidden="true" size={17} />}</>;

  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{content}</a>;
  if (as === 'span') return <span className={classes} {...props}>{content}</span>;
  return <button className={classes} type={props.type || 'button'} {...props}>{content}</button>;
}
