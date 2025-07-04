import HomeClient from './HomeClient';

export default function Page() {
  return <HomeClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
} 