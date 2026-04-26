import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '20px' }}>Fikirlerinizi Geleceğe Güvenle Taşıyın</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: '#e0e0e0' }}>
            OZY Patent ile marka, patent ve tasarım haklarınızı ulusal ve uluslararası arenada güvence altına alın. Uzman vekil kadromuzla yanınızdayız.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/iletisim" className="btn-primary">Hemen Ücretsiz Sorgulama Yapın</Link>
            <Link href="/hizmetlerimiz/marka-tescili" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Hizmetlerimizi İnceleyin</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Hizmetlerimiz</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass-card">
              <h3>Marka Tescili</h3>
              <p>Ticari itibarınızı ve kurumsal kimliğinizi koruma altına alarak taklit edilme riskini ortadan kaldırın.</p>
              <Link href="/hizmetlerimiz/marka-tescili" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginTop: '15px' }}>Detaylı Bilgi &rarr;</Link>
            </div>
            <div className="glass-card">
              <h3>Patent Tescili</h3>
              <p>Geliştirdiğiniz yenilikçi buluşların üçüncü kişiler tarafından izinsiz kullanılmasını engelleyin.</p>
              <Link href="/hizmetlerimiz/patent-tescili" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginTop: '15px' }}>Detaylı Bilgi &rarr;</Link>
            </div>
            <div className="glass-card">
              <h3>Tasarım Tescili</h3>
              <p>Ürünlerinizin estetik ve görsel özelliklerini hukuki güvence altına alarak rekabette öne geçin.</p>
              <Link href="/hizmetlerimiz/tasarim-tescili" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginTop: '15px' }}>Detaylı Bilgi &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Neden OZY Patent?</h2>
              <p style={{ marginTop: '20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Yılların getirdiği tecrübe, uzman vekil kadromuz ve şeffaf süreç yönetimimizle, fikirlerinizi sadece korumakla kalmıyor, onlara değer katıyoruz. Uluslararası partner ağımız sayesinde dünyanın her yerinde haklarınızı savunuyoruz.
              </p>
              <ul style={{ marginTop: '20px', listStyle: 'none' }}>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>&#10003;</span> Şeffaf Süreç Yönetimi
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>&#10003;</span> Uzman Vekil Kadrosu
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>&#10003;</span> Global Partner Ağı
                </li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '2rem' }}>10+</h3>
                <p>Yıllık Deneyim</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '2rem' }}>5000+</h3>
                <p>Tescilli Marka</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '2rem' }}>98%</h3>
                <p>Başarı Oranı</p>
              </div>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '2rem' }}>7/24</h3>
                <p>Destek</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
