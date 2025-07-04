import AboutClient from '../../about/AboutClient';

export default function Page() {
  return <AboutClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
} 