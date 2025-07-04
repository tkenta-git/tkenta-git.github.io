import ObservableClient from './ObservableClient';

export default function Page() {
  return <ObservableClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
} 