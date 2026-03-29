/**
 * Under Construction Page
 * 
 * Design Philosophy: Minimalist Industrial
 * - Brutalist aesthetic with monochromatic palette
 * - YouTube video as full-bleed hero background
 * - Asymmetric content placement (lower-right)
 * - Electric cyan accents for interactivity
 * - Monospace typography for technical credibility
 */

import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // Initialize player when API is ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        new window.YT.Player('youtube-player', {
          height: '100%',
          width: '100%',
          videoId: 'rq2v88PDy-Q',
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            mute: 1,
            loop: 1,
            playlist: 'rq2v88PDy-Q',
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
            },
          },
        });
      }
    };

    // Check if YT is already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Wait for onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          id="youtube-player"
          className="w-full h-full"
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container - Asymmetric Placement (Lower Right) */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end min-h-1/2">
        {/* Thin Geometric Line Divider */}
        <div className="w-12 h-0.5 bg-cyan-400 mb-8" />

        {/* Main Heading */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Under
          <br />
          Construction
        </h1>

        {/* Supporting Text */}
        <p className="font-sans text-base md:text-lg text-gray-200 mb-8 max-w-md leading-relaxed">
          Something extraordinary is being built. We're crafting an experience worth waiting for.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button
            className="px-8 py-3 bg-cyan-400 text-black font-mono font-semibold text-sm uppercase tracking-wider hover:bg-cyan-300 transition-colors duration-300 hover:scale-105 transform"
            onClick={() => {
              // Placeholder for future functionality
              alert('Notify me when ready');
            }}
          >
            Notify Me
          </button>
          <a
            href="mailto:contact@example.com"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-semibold text-sm uppercase tracking-wider hover:bg-cyan-400/10 transition-colors duration-300 hover:scale-105 transform"
          >
            Get in Touch
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
            Launching Soon
          </p>
        </div>
      </div>

      {/* Grain Overlay for Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// Extend Window interface for YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}
