import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>OZY Patent</h3>
            <p>Fikirlerinizi geleceğe güvenle taşıyın. Marka, patent ve tasarım haklarınızı güvence altına alın.</p>
          </div>
          <div className="footer-col">
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Hizmetlerimiz</h3>
            <ul>
              <li><Link href="/hizmetlerimiz/marka-tescili">Marka Tescili</Link></li>
              <li><Link href="/hizmetlerimiz/patent-tescili">Patent Tescili</Link></li>
              <li><Link href="/hizmetlerimiz/tasarim-tescili">Tasarım Tescili</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>İletişim</h3>
            <ul>
              <li>Bulgurlu Mh. Bağcılar Cd. No:10/</li>
              <li>Üsküdar, İstanbul</li>
              <li><a href="mailto:info@ozypatent.com">info@ozypatent.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OZY Patent ve Danışmanlık Hizmetleri. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
