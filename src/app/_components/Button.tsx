import { CSSProperties, HtmlHTMLAttributes, ReactNode } from 'react';
import { Link } from '@react-email/components';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'destructive';
  children: ReactNode;
  style?: CSSProperties;
  className?: HtmlHTMLAttributes<'a'>['className'];
}

const styles = {
  primary: {
    background: 'linear-gradient(90deg, #3197d4 0%, #3197d4 100%)',
    borderRadius: '100px',
    color: '#fff',
    padding: '10px 25px',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '16px',
    marginBottom: '16px',
    fontWeight: 500,
  } as CSSProperties,
  destructive: {
    background: 'linear-gradient(90deg, #f44336 0%, #f3665cff 100%)',
    borderRadius: '100px',
    color: '#fff',
    padding: '10px 25px',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '16px',
    marginBottom: '16px',
    fontWeight: 500,
  } as CSSProperties,
};

export default function Button({ href, variant = 'primary', children, style }: ButtonProps) {
  return (
    <Link style={{ ...styles[variant], ...style }} href={href}>
      {children}
    </Link>
  );
}
