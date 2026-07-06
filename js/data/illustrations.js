// Illustrations SVG de secours (créations originales, pas de photos tierces).
// Affichées tant que la vraie photo (images/destination-<clé>.jpg) n'est pas fournie.
export const DEST_ILLUSTRATIONS = {
  paris: `
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyParis" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3a2f52"/>
        <stop offset="55%" stop-color="#6b4a3a"/>
        <stop offset="100%" stop-color="#c6952c"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#skyParis)"/>
    <circle cx="320" cy="70" r="34" fill="#e8c77e" opacity="0.85"/>
    <circle cx="320" cy="70" r="52" fill="#e8c77e" opacity="0.15"/>
    <g opacity="0.5" fill="#0c0f1a">
      <path d="M0 230 h60 v-8 h20 v8 h30 v-14 h18 v14 h40 v-6 h22 v6 h60 v-10 h18 v10 h60 v220 h-328z"/>
    </g>
    <g fill="#0c0f1a">
      <polygon points="200,60 190,150 178,220 222,220 210,150"/>
      <polygon points="200,60 196,110 204,110"/>
      <rect x="182" y="215" width="36" height="8"/>
      <rect x="188" y="180" width="24" height="4"/>
      <rect x="184" y="140" width="32" height="4"/>
      <line x1="182" y1="220" x2="218" y2="220" stroke="#0c0f1a" stroke-width="2"/>
    </g>
    <rect x="0" y="220" width="400" height="80" fill="#0c0f1a" opacity="0.55"/>
  </svg>`,

  cretace: `
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyCretace" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#152318"/>
        <stop offset="55%" stop-color="#2f5c3a"/>
        <stop offset="100%" stop-color="#8fae52"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#skyCretace)"/>
    <circle cx="90" cy="60" r="26" fill="#e8c77e" opacity="0.8"/>
    <g fill="#0c0f1a" opacity="0.55">
      <ellipse cx="330" cy="220" rx="90" ry="60"/>
      <ellipse cx="60" cy="240" rx="110" ry="50"/>
    </g>
    <g fill="#0c0f1a">
      <path d="M110 220 C110 180 140 150 175 150 C185 150 190 140 205 128 C215 120 228 122 232 132 C236 142 228 150 218 152 C200 156 190 168 188 190 C186 210 200 220 220 222 L220 236 C180 240 130 236 110 220 Z"/>
      <circle cx="222" cy="134" r="4" fill="#4c8078"/>
      <path d="M115 200 L95 190 M118 210 L92 206 M124 218 L98 222" stroke="#0c0f1a" stroke-width="6" stroke-linecap="round"/>
      <path d="M195 222 L188 240 L198 240 L202 224" />
      <path d="M212 224 L210 242 L220 242 L220 226" />
    </g>
    <rect x="0" y="220" width="400" height="80" fill="#0c0f1a" opacity="0.4"/>
  </svg>`,

  florence: `
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyFlorence" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2a1a12"/>
        <stop offset="55%" stop-color="#5a2f1c"/>
        <stop offset="100%" stop-color="#c6952c"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#skyFlorence)"/>
    <circle cx="90" cy="65" r="30" fill="#e8c77e" opacity="0.85"/>
    <g fill="#0c0f1a" opacity="0.5">
      <rect x="0" y="200" width="90" height="60"/>
      <rect x="300" y="190" width="100" height="70"/>
    </g>
    <g fill="#0c0f1a">
      <rect x="150" y="180" width="100" height="60"/>
      <polygon points="150,180 200,120 250,180"/>
      <ellipse cx="200" cy="118" rx="26" ry="20"/>
      <polygon points="192,98 200,72 208,98"/>
      <rect x="197" y="66" width="6" height="14"/>
      <rect x="170" y="200" width="14" height="24"/>
      <rect x="216" y="200" width="14" height="24"/>
      <rect x="193" y="205" width="14" height="30"/>
    </g>
    <rect x="0" y="220" width="400" height="80" fill="#0c0f1a" opacity="0.35"/>
  </svg>`,

  lecaire: `
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyCaire" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2f2210"/>
        <stop offset="55%" stop-color="#6b4a1c"/>
        <stop offset="100%" stop-color="#e8c77e"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#skyCaire)"/>
    <circle cx="310" cy="70" r="32" fill="#ece3d0" opacity="0.85"/>
    <g fill="#0c0f1a" opacity="0.55">
      <polygon points="40,230 110,230 75,150"/>
    </g>
    <g fill="#0c0f1a">
      <polygon points="150,230 230,230 190,110"/>
      <polygon points="230,230 300,230 265,140"/>
      <rect x="0" y="222" width="400" height="4" opacity="0.6"/>
    </g>
    <g fill="#4c8078" opacity="0.5">
      <path d="M0 260 C 60 245, 100 270, 160 258 C 220 246, 260 268, 320 256 C 350 250, 380 258, 400 254 L400 300 L0 300 Z"/>
    </g>
    <rect x="0" y="220" width="400" height="80" fill="#0c0f1a" opacity="0.3"/>
  </svg>`
};

