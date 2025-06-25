"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // contact/nfcページではheaderを表示しない
  if (pathname === '/contact/nfc') {
    return null;
  }
  
  return <Header />;
} 
