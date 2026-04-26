'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [lang, setLang] = useState('TUR');
  const [langOpen, setLangOpen] = useState(false);

  const languages = ['TUR', 'ENG', 'FRA'];

  return (
    <header>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#132B40', padding: '8px 0', fontSize: '0.85rem', color: '#e0e0e0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: '600', background: 'none', border: 'none', color: '#e0e0e0', fontSize: '0.85rem', padding: '4px 8px', borderRadius: '4px' }}
            >
              <span style={{ color: '#4FC3F7', fontSize: '1rem' }}>🌐</span>
              {lang}
              <span style={{ fontSize: '0.65rem', transition: 'transform 0.2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </button>
            {langOpen && (
              <div style={{ position: 'absolute', right: 0, top: '110%', backgroundColor: '#1a3a54', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', zIndex: 100, minWidth: '80px' }}>
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left', padding: '8px 16px',
                      background: l === lang ? '#CBA153' : 'none',
                      color: l === lang ? '#fff' : '#e0e0e0',
                      border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => { if (l !== lang) e.currentTarget.style.background = 'rgba(203,161,83,0.2)'; }}
                    onMouseLeave={e => { if (l !== lang) e.currentTarget.style.background = 'none'; }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" style={{ backgroundColor: '#FFFFFF', padding: '15px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
            <img src="/images/logo.png" alt="OZY Logo" style={{ height: '50px', width: 'auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: '#132B40', lineHeight: '1', letterSpacing: '-0.5px' }}>OZY</span>
              <span style={{ fontSize: '0.65rem', fontWeight: '700', color: '#132B40', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Patent Danışmanlık</span>
            </div>
          </Link>

          {/* Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/" className="nav-link active">ANA SAYFA</Link>
            <Link href="/hizmetler" className="nav-link">HİZMETLER</Link>
            <Link href="/sektorler" className="nav-link">SEKTÖRLER</Link>
            <Link href="/online-islemler" className="nav-link">ONLİNE İŞLEMLER</Link>
            <Link href="/bilgi-merkezi" className="nav-link">BİLGİ MERKEZİ</Link>
            <Link href="/iletisim" className="nav-link">İLETİŞİM</Link>
            <span style={{ marginLeft: '10px', cursor: 'pointer', fontSize: '1.2rem' }}>🔍</span>
          </div>

        </div>
      </nav>


    </header>
  );
}
