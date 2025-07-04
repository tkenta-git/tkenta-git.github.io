import WorkClient from './WorkClient';

export default function Page() {
  return <WorkClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
} 