export const getTechIcon = (id) => {
  switch (id) {
    case 'html':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#E44D26" d="M6 2l2.4 26L16 30l7.6-2L26 2H6zm16.3 8H12.7l.3 3.5h9l-.5 5.5-5.5 1.5-5.5-1.5-.3-3.5h3.3l.1 1.8 2.4.6 2.4-.6.3-2.8H9.5L9 6h14l-.7 4z" />
        </svg>
      )
    case 'css':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#1572B6" d="M6 2l2.4 26L16 30l7.6-2L26 2H6zm16.1 8H12.7l.3 3.5h8.8l-.5 5.5-5.3 1.5-5.3-1.5-.4-3.5h3.3l.2 1.8 2.2.6 2.2-.6.3-2.8H9.7L9 6h14l-.9 4z" />
        </svg>
      )
    case 'javascript':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect fill="#F7DF1E" width="32" height="32" rx="2" />
          <path d="M20.8 23.7c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2-1.9l-.7-.3c-2-.9-3.4-1.9-3.4-4.2 0-2.1 1.6-3.7 4.1-3.7 1.8 0 3 .6 3.9 2.2l-2.2 1.4c-.5-.9-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.7 1.6l.7.3c2.4 1 3.7 2.1 3.7 4.4 0 2.5-2 3.9-4.6 3.9-2.6 0-4.3-1.2-5.1-2.9l2.3-1.1zm-10 .3c.5.8.9 1.5 1.9 1.5 1 0 1.6-.4 1.6-1.9v-10h3v10.2c0 3.1-1.8 4.5-4.5 4.5-2.4 0-3.8-1.2-4.5-2.7l2.5-1.6z" fill="#000" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect fill="#43853D" width="32" height="32" rx="2" />
          <path d="M9 20.2V11h2v9.1c0 2.1-1.2 3.2-3 3.2-.9 0-1.8-.3-2.4-1l1.1-1.5c.3.3.7.5 1.1.5.8 0 1.2-.4 1.2-1.1z" fill="#fff" />
          <path d="M17 17.1c0-3.5 2.6-6.2 6.1-6.2 2 0 3.7.8 4.8 2.2l-1.5 1.2c-.8-1-2-1.6-3.4-1.6-2.4 0-4.1 1.8-4.1 4.4s1.7 4.4 4.1 4.4c1.4 0 2.6-.6 3.4-1.6l1.5 1.2c-1.1 1.4-2.8 2.2-4.8 2.2-3.5 0-6.1-2.7-6.1-6.2z" fill="#fff" />
        </svg>
      )
    case 'git':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#F05032" d="M29.5 15.2L16.8 2.5a1.7 1.7 0 0 0-2.4 0l-2.6 2.6 3.3 3.3a2 2 0 0 1 2.5 2.6l3.2 3.2a2 2 0 1 1-1.2 1.1l-3-3v7.8a2 2 0 1 1-1.6-.1V12a2 2 0 0 1-1.1-2.6L11.6 6.1l-9.1 9.1a1.7 1.7 0 0 0 0 2.4l12.7 12.7a1.7 1.7 0 0 0 2.4 0l12.7-12.7a1.7 1.7 0 0 0 .2-2.4z" />
        </svg>
      )
    case 'sqlite':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#0f766e" />
          <path fill="#0f766e" d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8c0 2.2-4.5 4-10 4S6 10.2 6 8z" />
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#14b8a6" opacity="0.35" />
        </svg>
      )
    case 'vite':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path fill="url(#vite-grad)" d="M6 8l10-4 10 4-10 18L6 8z" opacity="0.2" />
          <path fill="url(#vite-grad)" d="M16 4l7 4-7 18L9 8l7-4z" />
        </svg>
      )
    case 'react':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="react-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="2.6" fill="url(#react-grad)" />
          <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="url(#react-grad)" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="url(#react-grad)" strokeWidth="1.5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="url(#react-grad)" strokeWidth="1.5" transform="rotate(120 16 16)" />
        </svg>
      )
    case 'mysql':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#0ea5e9" />
          <path fill="#0ea5e9" d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8c0 2.2-4.5 4-10 4S6 10.2 6 8z" />
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#38bdf8" opacity="0.35" />
        </svg>
      )
    case 'prisma':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="prisma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
          </defs>
          <path fill="url(#prisma-grad)" d="M16 4l8 18-8 6-8-6 8-18z" />
          <path fill="#ffffff" opacity="0.9" d="M16 8l4.8 11-4.8 3.6L11.2 19 16 8z" />
        </svg>
      )
    case 'docker':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="6" y="7" width="20" height="14" rx="3" fill="#0ea5e9" />
          <rect x="8" y="9" width="16" height="10" rx="2" fill="#e0f2fe" />
          <rect x="12" y="22" width="8" height="2" rx="1" fill="#0ea5e9" />
          <circle cx="11" cy="13" r="1" fill="#0ea5e9" />
          <circle cx="16" cy="13" r="1" fill="#0ea5e9" />
          <circle cx="21" cy="13" r="1" fill="#0ea5e9" />
        </svg>
      )
    case 'ai':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="12" fill="url(#ai-grad)" opacity="0.18" />
          <path d="M16 7l1.9 4.4L22 13l-4.1 1.6L16 19l-1.9-4.4L10 13l4.1-1.6L16 7z" fill="url(#ai-grad)" />
          <path d="M9 22c1.6-1.8 3.7-2.8 7-2.8s5.4 1 7 2.8" fill="none" stroke="url(#ai-grad)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'c':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#00599C" d="M16 2L2.5 8.5v15L16 30l13.5-6.5v-15L16 2zm0 4l10 4.8v9.4L16 25l-10-4.8v-9.4L16 6z" />
          <path fill="#00599C" d="M19 12h-6v8h6v-2h-4v-1h4v-2h-4v-1h4v-2z" />
        </svg>
      )
    case 'cpp':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#004482" d="M16 2L2.5 8.5v15L16 30l13.5-6.5v-15L16 2z" />
          <path fill="#ffffff" d="M14 12h-4v8h4v-2h-2v-1h2v-2h-2v-1h2v-2zm8 3h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1zm4 0h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1z" />
        </svg>
      )
    case 'asm':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="8" y="8" width="16" height="16" fill="#4B5563" />
          <path fill="#9CA3AF" d="M6 10h2v2H6zm0 5h2v2H6zm0 5h2v2H6zm20-10h2v2h-2zm0 5h2v2h-2zm0 5h2v2h-2zM12 6h2v2h-2zm5 0h2v2h-2zm-10 18h2v2H7zm5 0h2v2h-2z" />
        </svg>
      )
    case 'linux':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#333" d="M16 2c-4.4 0-8 3.6-8 8 0 1.6.5 3.1 1.3 4.4C8.5 15.6 8 17.2 8 19c0 3.9 3.1 7 7 7h2c3.9 0 7-3.1 7-7 0-1.8-.5-3.4-1.3-4.6.8-1.3 1.3-2.8 1.3-4.4 0-4.4-3.6-8-8-8z" />
          <circle cx="13" cy="10" r="1.5" fill="#fff" />
          <circle cx="19" cy="10" r="1.5" fill="#fff" />
          <path fill="#FFA000" d="M13 14h6l-3 3-3-3zM10 26c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2zm12 0c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" />
        </svg>
      )
    case 'ssh':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="4" y="6" width="24" height="20" rx="2" fill="#1F2937" />
          <path fill="#10B981" d="M8 12l4 4-4 4M14 20h6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'kubernetes':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#326CE5" d="M16 2l11 4.5v11L16 30l-11-12.5v-11L16 2z" />
          <path fill="#fff" d="M16 8l5 2.5v5.5L16 18.5l-5-2.5v-5.5L16 8z" />
          <path fill="#fff" d="M16 6v10m-8.5-1.5L16 16m8.5-1.5L16 16m-4.5 7.5L16 16m4.5 7.5L16 16" stroke="#fff" strokeWidth="1.5" />
        </svg>
      )
    case 'bash':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#4D4D4D" d="M4 6h24v20H4z" />
          <path fill="#fff" d="M8 12l4 4-4 4m6 0h6" stroke="#fff" strokeWidth="2" />
        </svg>
      )
    case 'embedded':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#00979C" d="M16 6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-4 12h-2v-4h2v4zm8 0h-2v-4h2v4zm-1-8l2 2-2 2-2-2 2-2z" />
          <path fill="#00979C" d="M12 22l-2-2 2-2 2 2-2 2z" />
        </svg>
      )
    case 'webcore':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#E44D26" d="M6 2l2.4 26L16 30l7.6-2L26 2H6zm16.3 8H12.7l.3 3.5h9l-.5 5.5-5.5 1.5-5.5-1.5-.3-3.5h3.3l.1 1.8 2.4.6 2.4-.6.3-2.8H9.5L9 6h14l-.7 4z" />
        </svg>
      )
    case 'csharp':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#68217A" d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm5.7 17.3h-1.3l-.3 1h-1.3l.3-1h-1.5l-.3 1h-1.3l.3-1H15l.3-1.2h1.2l.4-1.3H15.6l.3-1h1.3l.3-1h1.3l-.3 1h1.5l.3-1h1.3l-.3 1h1.2l-.3 1.2h-1.2l-.4 1.3h1.3zm-3.7 0h1.5l.4-1.3H18.4l-.4 1.3zM16 6.5c2.6 0 5 1.1 6.8 2.8L20 12.1A7.5 7.5 0 0 0 8.5 16 7.5 7.5 0 0 0 20 19.9l2.8 2.8A12.6 12.6 0 0 1 16 25.5c-5.2 0-9.5-4.3-9.5-9.5S10.8 6.5 16 6.5z" />
        </svg>
      )
    case 'kotlin':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="kotlin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F52FF" />
              <stop offset="50%" stopColor="#C811E2" />
              <stop offset="100%" stopColor="#E54857" />
            </linearGradient>
          </defs>
          <path fill="url(#kotlin-grad)" d="M4 28L16.2 15.6 28 28H4zM4 4h12.1L4 16.4V4zM16.5 4L4 17v11l12.5-12.8L28 4H16.5z" />
        </svg>
      )
    case 'typescript':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <rect fill="#3178C6" width="32" height="32" rx="2" />
          <path d="M22.8 25.4c.5.9 1.2 1.6 2.5 1.6 1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.5-1.2 1.1 0 .7.5 1 1.5 1.5l.6.3c2.1 1 3.4 1.9 3.4 4 0 2.3-1.8 3.5-4.1 3.5-2.3 0-3.9-1.1-4.6-2.6l1.9-1.2zm-9.2.1c.4.7.7 1.2 1.6 1.2s1.4-.4 1.4-1.7V16.6h2.7v8.5c0 2.8-1.6 4-4 4-2.2 0-3.4-1.1-4-2.5l2.3-1.1z" fill="#fff" />
        </svg>
      )
    case 'sql':
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#006591" />
          <path fill="#006591" d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8c0 2.2-4.5 4-10 4S6 10.2 6 8z" />
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#0ea5e9" opacity="0.5" />
          <path d="M6 14c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="#0ea5e9" strokeOpacity="0.4" strokeWidth="0.8" />
          <path d="M6 20c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="#0ea5e9" strokeOpacity="0.4" strokeWidth="0.8" />
        </svg>
      )
    default:
      return (
        <svg className="tech-chip__svg" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="#ccc" />
        </svg>
      )
  }
}
