import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="nav-brand">
          OZY<span>Patent</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/hakkimizda">Kurumsal</Link>
          <Link href="/hizmetlerimiz/marka-tescili">Marka Tescili</Link>
          <Link href="/hizmetlerimiz/patent-tescili">Patent</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
      </div>
    </nav>
  );
}
