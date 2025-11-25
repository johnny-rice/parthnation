import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Get dynamic parameters or use defaults
  const title = searchParams.get('title') || 'Parth Nation'
  const subtitle = searchParams.get('subtitle') || 'Honoring the Heart of Charlton Basketball'
  const date = searchParams.get('date') || 'December 13th, 2025'
  const location = searchParams.get('location') || 'Shepherd Hill Regional High School, Dudley, MA'

  // Generate SVG with site information
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ea580c;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg-gradient)"/>
      
      <!-- Decorative basketball lines pattern -->
      <g opacity="0.1" stroke="#ea580c" stroke-width="2" fill="none">
        <circle cx="150" cy="100" r="80"/>
        <circle cx="1050" cy="530" r="80"/>
        <line x1="150" y1="20" x2="150" y2="180"/>
        <line x1="70" y1="100" x2="230" y2="100"/>
        <line x1="1050" y1="450" x2="1050" y2="610"/>
        <line x1="970" y1="530" x2="1130" y2="530"/>
      </g>
      
      <!-- Top accent bar -->
      <rect x="0" y="0" width="1200" height="8" fill="url(#accent-gradient)"/>
      
      <!-- Basketball emoji/icon as decorative element -->
      <text x="100" y="320" font-size="120" opacity="0.15">🏀</text>
      <text x="1000" y="500" font-size="100" opacity="0.15">🏀</text>
      
      <!-- Main content container -->
      <g>
        <!-- Title -->
        <text 
          x="600" 
          y="180" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="84" 
          font-weight="bold" 
          fill="#ffffff" 
          text-anchor="middle"
          filter="url(#glow)"
        >
          ${escapeXml(title)}
        </text>
        
        <!-- Subtitle -->
        <text 
          x="600" 
          y="250" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="36" 
          font-weight="600" 
          fill="#fbbf24" 
          text-anchor="middle"
        >
          ${escapeXml(subtitle)}
        </text>
        
        <!-- Decorative line -->
        <line 
          x1="400" 
          y1="290" 
          x2="800" 
          y2="290" 
          stroke="url(#accent-gradient)" 
          stroke-width="3"
        />
        
        <!-- Date info -->
        <g>
          <rect x="350" y="330" width="500" height="80" rx="12" fill="#1e293b" opacity="0.8"/>
          <text 
            x="600" 
            y="365" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="28" 
            font-weight="600" 
            fill="#f97316" 
            text-anchor="middle"
          >
            📅 ${escapeXml(date)}
          </text>
          <text 
            x="600" 
            y="398" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="22" 
            fill="#cbd5e1" 
            text-anchor="middle"
          >
            ${escapeXml(location)}
          </text>
        </g>
        
        <!-- Call to action -->
        <g>
          <rect 
            x="400" 
            y="460" 
            width="400" 
            height="70" 
            rx="35" 
            fill="url(#accent-gradient)"
          />
          <text 
            x="600" 
            y="505" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="32" 
            font-weight="bold" 
            fill="#ffffff" 
            text-anchor="middle"
          >
            Join the Tournament
          </text>
        </g>
        
        <!-- Bottom tagline -->
        <text 
          x="600" 
          y="580" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="24" 
          fill="#94a3b8" 
          text-anchor="middle"
          font-style="italic"
        >
          Supporting Mental Health Awareness
        </text>
      </g>
      
      <!-- Heart icon -->
      <text x="520" y="590" font-size="28">❤️</text>
    </svg>
  `.trim()

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

