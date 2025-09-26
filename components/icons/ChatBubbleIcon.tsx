import React from 'react';

const ChatBubbleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.125 1.125 0 01-1.59 0l-3.72-3.72c-1.133-.093-1.98-1.057-1.98-2.192V10.608c0-.97.616-1.813 1.5-2.097m6.72-6.72a.75.75 0 01.23-.53l.75-.75a.75.75 0 011.06 0l.75.75a.75.75 0 01.53.23m-10.5 0a.75.75 0 01.23-.53l.75-.75a.75.75 0 011.06 0l.75.75a.75.75 0 01.53.23m-1.5-3a.75.75 0 01.23-.53l.75-.75a.75.75 0 011.06 0l.75.75a.75.75 0 01.53.23m-4.5 0a.75.75 0 01.23-.53l.75-.75a.75.75 0 011.06 0l.75.75a.75.75 0 01.53.23" />
  </svg>
);

export default ChatBubbleIcon;