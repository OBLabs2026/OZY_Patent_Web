import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        padding: '80px 0', 
        backgroundColor: '#132B40',
        color: 'white', 
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ textAlign: 'left' }}>
          <h1 style={{ color: 'white', fontSize: '3.8rem', fontWeight: '800', marginBottom: '20px', maxWidth: '650px', lineHeight: '1.1' }}>
            FİKRİ MÜLKİYETİNİZİ<br/>GELECEĞE TAŞIYORUZ
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '50px', maxWidth: '600px', color: '#e0e0e0' }}>
            OZY Patent Danışmanlık ile fikirlerinizi global ölçekte koruyun.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/hizmetlerimiz" className="btn-primary" style={{ padding: '16px 32px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px' }}>
              HİZMETLERİMİZİ KEŞFEDİN
            </Link>
            <Link href="/marka-sorgula" className="btn-secondary" style={{ padding: '16px 32px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              MARKA SORGULA
            </Link>
          </div>
        </div>
      </section>


      {/* Services Section - Section 2 */}
      <section style={{ padding: '80px 0', backgroundColor: '#f7f8fc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '800', color: '#132B40', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            ÖNE ÇIKAN HİZMETLERİMİZ
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#CBA153', margin: '0 auto 50px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '25px' }}>
            
            {/* Marka Tescili */}
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.07)', border: '1px solid #eaeaea', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(19,43,64,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 15px rgba(0,0,0,0.07)'; }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* İkon geldiğinde: <img src="/images/icon-marka.png" alt="Marka Tescili" style={{width:'100%'}} /> */}
                <span style={{ fontSize: '3rem' }}>🏷️</span>
              </div>
              <h3 style={{ color: '#132B40', fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Marka Tescili</h3>
              <p style={{ color: '#667', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>OZY Patent Danışmanlık ile markanı global ölçekte koruyun.</p>
              <Link href="/hizmetlerimiz/marka-tescili" style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: '#132B40', color: 'white', borderRadius: '5px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none' }}>DETAYLI BİLGİ</Link>
            </div>

            {/* Patent Tescili */}
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.07)', border: '1px solid #eaeaea', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(19,43,64,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 15px rgba(0,0,0,0.07)'; }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* İkon geldiğinde: <img src="/images/icon-patent.png" alt="Patent Tescili" style={{width:'100%'}} /> */}
                <span style={{ fontSize: '3rem' }}>⚙️</span>
              </div>
              <h3 style={{ color: '#132B40', fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Patent Tescili</h3>
              <p style={{ color: '#667', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>OZY Patent Danışmanlık ile buluşunu farklı ülkelerde global ölçekte üretin.</p>
              <Link href="/hizmetlerimiz/patent-tescili" style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: '#132B40', color: 'white', borderRadius: '5px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none' }}>DETAYLI BİLGİ</Link>
            </div>

            {/* Tasarım Tescili */}
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.07)', border: '1px solid #eaeaea', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(19,43,64,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 15px rgba(0,0,0,0.07)'; }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* İkon geldiğinde: <img src="/images/icon-tasarim.png" alt="Tasarım Tescili" style={{width:'100%'}} /> */}
                <span style={{ fontSize: '3rem' }}>🖌️</span>
              </div>
              <h3 style={{ color: '#132B40', fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tasarım Tescili</h3>
              <p style={{ color: '#667', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>Tasarım bütün unsurların çizimle ifade üretilmesi tescil edilmesi.</p>
              <Link href="/hizmetlerimiz/tasarim-tescili" style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: '#132B40', color: 'white', borderRadius: '5px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none' }}>DETAYLI BİLGİ</Link>
            </div>

            {/* Faydalı Model */}
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.07)', border: '1px solid #eaeaea', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(19,43,64,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 15px rgba(0,0,0,0.07)'; }}>
              <div style={{ width: '70px', height: '70px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* İkon geldiğinde: <img src="/images/icon-faydali.png" alt="Faydalı Model" style={{width:'100%'}} /> */}
                <span style={{ fontSize: '3rem' }}>🔧</span>
              </div>
              <h3 style={{ color: '#132B40', fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Faydalı Model</h3>
              <p style={{ color: '#667', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>OZY Patent Danışmanlık ile buluşunu güvence altına üretebilir sur oluşturun.</p>
              <Link href="/hizmetlerimiz/faydali-model" style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: '#132B40', color: 'white', borderRadius: '5px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none' }}>DETAYLI BİLGİ</Link>
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
