import React from 'react';
import { TypographyProps } from '../../types';
import styles from './Typography.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight = 'normal',
  align = 'left',
  color,
  as,
  children,
  className = '',
  ...props
}) => {
  const Component = as || getDefaultElement(variant);
  
  const typographyClasses = [
    styles.typography,
    styles[variant],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    className
  ].filter(Boolean).join(' ');

  const style = color ? { color } : undefined;

  return (
    <Component
      className={typographyClasses}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyProps['variant']): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'body':
      return 'p';
    case 'caption':
    case 'label':
      return 'span';
    default:
      return 'p';
  }
}