import VisitorContactClient from '../VisitorContactClient';

export default function Page() {
  return <VisitorContactClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}
