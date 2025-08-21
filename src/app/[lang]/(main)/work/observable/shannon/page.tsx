import ObservableClient from './ObservableClient';

export default function ShannonPage() {
  return <ObservableClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}
