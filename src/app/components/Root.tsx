import { Outlet } from 'react-router';
import { FolderTabs } from './FolderTabs';
import { CustomCursor } from './CustomCursor';
import { StarField } from './Starfield'; 

export default function Root() {
  return (
    <div className="min-h-screen bg-[#111111] text-white relative">
      <CustomCursor />
      <StarField />  
      <FolderTabs />

      <main className="relative z-10 pr-20">  
        <Outlet />
      </main>

      <footer className="relative z-10 py-8 text-center pr-20">  
        <p className="font-mono text-xs text-[#8E8E8E]">
          made with ♡ by pangteng © 2026 — all rights reserved
        </p>
      </footer>

      {/* Noise Overlay — keep z-index above stars but below content */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          zIndex: 5,  
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}