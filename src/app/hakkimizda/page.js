export const metadata = {
  title: "Hakkımızda | OZY Patent ve Danışmanlık Hizmetleri",
  description: "OZY Patent, marka, patent ve tasarım tescili alanında uzman kadrosuyla İstanbul'dan tüm Türkiye'ye ve dünyaya hizmet vermektedir.",
};

export default function Hakkimizda() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>Hakkımızda</h1>
          <p style={{ fontSize: '1.2rem', color: '#e0e0e0', maxWidth: '700px', margin: '0 auto' }}>
            Fikri ve sınai mülkiyet haklarında güvenilir çözüm ortağınız.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Firmamız</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                OZY Patent ve Danışmanlık Hizmetleri, marka tescili, patent başvurusu, faydalı model ve tasarım tescili konularında uzmanlaşmış, Üsküdar/İstanbul merkezli bir fikri ve sınai mülkiyet danışmanlık firmasıdır.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Yılların verdiği deneyim ve güncel sektör bilgisini bir araya getiren uzman vekil kadromuzla; ulusal Türk Patent ve Marka Kurumu (TÜRKPATENT) başvurularından uluslararası WIPO, EPO ve EUIPO süreçlerine kadar geniş bir hizmet yelpazesi sunuyoruz.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Her müvekkilimize özel, şeffaf ve süreç odaklı bir danışmanlık anlayışıyla hizmet veriyor; fikri mülkiyet haklarınızın en güçlü şekilde korunmasını sağlıyoruz.
              </p>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <div className="glass-card" style={{ marginBottom: '20px' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Vizyonumuz</h3>
                <p style={{ color: 'var(--text-muted)' }}>Türkiye'nin en güvenilir ve yenilikçi fikri mülkiyet danışmanlık firmalarından biri olmak; müvekkillerimizin fikirlerini ve yatırımlarını en üst düzeyde korumak.</p>
              </div>
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Misyonumuz</h3>
                <p style={{ color: 'var(--text-muted)' }}>Her başvuruyu ve her markayı kendi işimiz gibi benimseyerek, müvekkillerimize dürüst, hızlı ve etkin hukuki hizmet sunmak.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 0', background: 'var(--surface)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '50px' }}>Neden Bizi Tercih Etmelisiniz?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚖️</div>
              <h3>Uzman Kadro</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Alanında uzman, yetkili patent ve marka vekilleriyle çalışıyorsunuz.</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔍</div>
              <h3>Şeffaf Süreç</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Başvurunun her aşamasında sizi bilgilendiriyor, sürprizlere yer bırakmıyoruz.</p>
            </div>
            <div className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌍</div>
              <h3>Global Erişim</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Uluslararası ağımız sayesinde WIPO ve EUIPO dahil dünya genelinde tescil imkânı.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
