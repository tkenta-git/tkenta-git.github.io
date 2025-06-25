/*
 * Shared TypeScript Interfaces
 * Common type definitions used across the application
 */

// Project and Content Types
export interface ProjectInfo {
  title: string;
  date: string;
  description: string;
  keywords?: string[];
  background?: string;
  objective?: string;
}

export interface ProjectHeaderProps {
  title: string;
  date: string;
  description: string;
}

export interface ProjectDescriptionProps {
  title: string;
  keywords: string[];
  background: string;
  objective: string;
}

// Data Visualization Types
export interface Species {
  id: number;
  name: string;
  count: number;
  color: string;
}

export interface ChartDimensions {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface D3Selection {
  node(): SVGElement | null;
  selectAll(selector: string): any;
  append(elementType: string): any;
  attr(name: string, value: any): any;
  style(name: string, value: any): any;
}

// Animation and UI Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
  willChange?: boolean;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

// Button Component Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

// Typography Component Types
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label';
export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps extends BaseComponentProps {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Card Component Types
export interface CardProps extends BaseComponentProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  interactive?: boolean;
}

// Layout Types
export interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

export interface LayoutProps extends BaseComponentProps {
  header?: boolean;
  footer?: boolean;
}

// Form Types
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
  activeHref?: string;
}

// Modal and Overlay Types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Notification Types
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationProps {
  type: NotificationType;
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  onDismiss?: () => void;
}

// Theme and Styling Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    muted: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface BreakpointConfig {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type StringOrNumber = string | number;

// API and Data Types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Event Handler Types
export type ClickHandler = (event: React.MouseEvent) => void;
export type ChangeHandler<T = HTMLInputElement> = (event: React.ChangeEvent<T>) => void;
export type FocusHandler<T = HTMLElement> = (event: React.FocusEvent<T>) => void;
export type KeyboardHandler = (event: React.KeyboardEvent) => void;

// Responsive Types
export interface ResponsiveValue<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

// Animation Hook Types
export interface AnimationHookOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  triggerOnce?: boolean;
  disabled?: boolean;
}

export interface IntersectionObserverHookReturn {
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
  hasIntersected: boolean;
}

// Chart and Visualization Specific Types
export interface ShannonDiversityData {
  species: Species[];
  totalCount: number;
  diversity: number;
  maxDiversity: number;
  evenness: number;
}

export interface ChartConfig {
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  animation?: boolean;
  colors?: string[];
  legend?: boolean;
  tooltip?: boolean;
}

export interface VisualizationProps {
  data: any[];
  config?: ChartConfig;
  dimensions?: Partial<ChartDimensions>;
  className?: string;
}

// Error Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}