import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      {/* Top Bar */}
      <div style={{ backgroundColor: 'var(--primary-dark)', padding: '8px 0', fontSize: '0.8rem', color: '#e0e0e0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            🌐 ENG / TUR / FRA 
            <span style={{ fontSize: '0.6rem' }}>▼</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '20px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Placeholder */}
          <Link href="/" className="nav-brand" style={{ color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span style={{ fontSize: '2rem' }}>🛡️</span>
             <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '800' }}>OZY</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '1.5px', fontWeight: '600' }}>PATENT DANIŞMANLIK</span>
             </div>
          </Link>

          {/* Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', fontWeight: '700' }}>
            <Link href="/" style={{ color: 'var(--accent)' }}>ANA SAYFA</Link>
            <Link href="/hizmetlerimiz" style={{ color: 'var(--primary-dark)' }}>HİZMETLER</Link>
            <Link href="/sektorler" style={{ color: 'var(--primary-dark)' }}>SEKTÖRLER</Link>
            <Link href="/online-islemler" style={{ color: 'var(--primary-dark)' }}>ONLİNE İŞLEMLER</Link>
            <Link href="/bilgi-merkezi" style={{ color: 'var(--primary-dark)' }}>BİLGİ MERKEZİ</Link>
            <Link href="/iletisim" style={{ color: 'var(--primary-dark)' }}>İLETİŞİM</Link>
          </div>

          {/* Search Icon */}
          <div style={{ cursor: 'pointer', fontSize: '1.2rem', color: 'var(--primary-dark)' }}>
            🔍
          </div>
        </div>
      </nav>
    </header>
  );
}
