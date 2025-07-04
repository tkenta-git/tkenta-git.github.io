'use client';
import '@/styles/design-tokens.css';
import '@/styles/animations.css';
import '../(main)/globals.css';
import { ReactNode } from 'react';
import { I18nProvider } from './i18n';
import ConditionalHeader from '../../components/ConditionalHeader';

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang;
  return (
    <I18nProvider lang={lang}>
      <ConditionalHeader />
      {children}
    </I18nProvider>
  );
} 