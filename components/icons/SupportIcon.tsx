import React from 'react';

const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 1C6.48 1 2 5.48 2 11v7c0 1.66 1.34 3 3 3h1v-4h-2v-3c0-4.41 3.59-8 8-8s8 3.59 8 8v3h-2v4h1c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);

export default SupportIcon;
