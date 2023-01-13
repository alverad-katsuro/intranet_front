import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import NavbarPersonalizada from '../components/NavbarPersonalizada';
import '../styles/globals.css';

export class AppRoot {
  static html: DOMTokenList;
}


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add("bg:white")
    document.body.classList.add("dark:bg-gray-700")
  })
  return (
    //<ThemeProvider>
    //</ThemeProvider>
    <>
      <NavbarPersonalizada></NavbarPersonalizada>
      <Component {...pageProps} />
    </>

  )
}
