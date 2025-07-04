import ContactClient from './ContactClient';

export default function Page() {
  return <ContactClient />;
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
} 