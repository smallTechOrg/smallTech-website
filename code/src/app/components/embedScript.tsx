'use client';

import { useEffect } from 'react';

export default function EmbedScript() {
  useEffect(() => {
    // Create and append the embed script
    const script = document.createElement('script');
    script.src = `${process.env.NEXT_PUBLIC_EMBED_BASE_URL}/embed.js`;
    script.setAttribute('data-chat-url', `${process.env.NEXT_PUBLIC_EMBED_BASE_URL}/embed`);
    script.setAttribute('data-display-mobile', 'false');
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Also clean up any embed elements that might have been created
      const embedContainer = document.querySelector('[data-embed-container]');
      if (embedContainer) {
        embedContainer.remove();
      }
    };
  }, []);

  return null;
}
