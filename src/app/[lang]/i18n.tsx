"use client";
import { ReactNode, createContext, useContext, useMemo } from 'react';

interface I18nContextProps {
  t: (key: string) => string;
  lang: string;
}

const I18nContext = createContext<I18nContextProps>({ t: (k) => k, lang: 'ja' });

export function useTranslations() {
  return useContext(I18nContext);
}

export function I18nProvider({ lang, children }: { lang: string; children: ReactNode }) {
  // 動的に辞書を読み込む
  const dict = useMemo(() => {
    if (lang === 'en') {
      return require('../../../dictionaries/en.json');
    } else {
      return require('../../../dictionaries/ja.json');
    }
  }, [lang]);
  const t = (key: string) => dict[key] || key;
  return <I18nContext.Provider value={{ t, lang }}>{children}</I18nContext.Provider>;
} 