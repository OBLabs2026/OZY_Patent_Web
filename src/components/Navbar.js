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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
            {languages.map((l, index) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => setLang(l)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: l === lang ? '#CBA153' : '#e0e0e0',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    padding: '0',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => { if (l !== lang) e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { if (l !== lang) e.currentTarget.style.color = '#e0e0e0'; }}
                >
                  {l}
                </button>
                {index < languages.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>|</span>
                )}
              </div>
            ))}
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
