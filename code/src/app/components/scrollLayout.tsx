'use client';
import { useScrollSync } from '../hooks/useScrollSync';
import Page from './pageContent';
import Landing from '../landing/landing';
import Domains from '../domains/domains';
import Offerings from '../offerings/offerings';
import Chat from '../chat/chat';
import Portfolio from '../portfolio/portfolio';
import EmbedScript from './embedScript';

export default function ScrollLayout() {
useScrollSync()
  return (
    <>
      <EmbedScript />
      <main className="max-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Page
          key="landing"
          id="landing"
          
          content={<Landing />}
        />
         <Page
          key="portfolio"
          id="portfolio"
          content={<Portfolio/>}
        />
         <Page
          key="offerings"
          id="offerings"
          content={<Offerings/>}
        />
        <Page
          key="domains"
          id="domains"
          content={<Domains/>}
        />
        
        <Page
          key="chat"
          id="chat"
          content={<Chat/>}
          className="md:hidden"
        />

      </main>
    </>
  );
}
