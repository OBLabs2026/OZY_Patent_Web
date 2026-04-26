import Link from 'next/link';

export const metadata = {
  title: "Tasarım Tescili | OZY Patent ve Danışmanlık Hizmetleri",
  description: "Ürünlerinizin estetik ve görsel özelliklerini hukuki güvence altına alın. OZY Patent ile ulusal ve uluslararası tasarım tescil süreçlerinizi güvenle yürütün.",
};

export default function TasarimTescili() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>Tasarım Tescili</h1>
          <p style={{ fontSize: '1.2rem', color: '#e0e0e0', maxWidth: '700px', margin: '0 auto' }}>
            Ürünlerinizin özgün görünümünü ve estetik değerini koruma altına alın.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="glass-card" style={{ marginBottom: '40px' }}>
              <h2 style={{ marginBottom: '20px' }}>Tasarım Tescili Nedir?</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Tasarım tescili; bir ürünün tamamının veya bir parçasının çizgiler, şekiller, biçimler, renkler, dokular, malzemeler ve esneklik gibi özelliklerinden doğan görünümünü koruma altına alan hukuki bir belgedir.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                OZY Patent olarak; tasarımlarınızın ulusal (TÜRKPATENT) ve uluslararası (EUIPO, WIPO Hague Sistemi) tescil süreçlerini başvurudan belge teslimine kadar profesyonellikle yönetiyoruz.
              </p>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Tasarım Tescilinin Faydaları</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Münhasır Kullanım Hakkı</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tescilli tasarımınızı yalnızca siz kullanabilir, üretebilir ve satabilirsiniz.</p>
              </div>
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Taklide Karşı Koruma</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>İzinsiz kopyalama ve taklit girişimlerine karşı yasal yaptırım uygulayabilirsiniz.</p>
              </div>
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Ticari Değer</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tescilli tasarım, markanıza ve ürününüze somut bir ticari ve finansal değer katar.</p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/iletisim" className="btn-primary" style={{ marginRight: '20px' }}>Ücretsiz Danışmanlık Alın</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
