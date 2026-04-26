import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#132B40', padding: '8px 0', fontSize: '0.85rem', color: '#e0e0e0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500' }}>
            <span style={{ color: '#4FC3F7', fontSize: '1rem' }}>🌐</span> ENG / TUR / FRA <span style={{ fontSize: '0.7rem' }}>▼</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" style={{ backgroundColor: '#FFFFFF', padding: '15px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
             <img src="/images/logo.png" alt="OZY Patent Danışmanlık" style={{ height: '50px', width: 'auto' }} />
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
