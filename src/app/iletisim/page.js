export default function Iletisim() {
  return (
    <div className="container" style={{ padding: '80px 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Fikirlerinizi Korumaya Bugün Başlayın</h1>
      
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px' }}>
          <div className="glass-card">
            <h2 style={{ marginBottom: '20px' }}>OZY Patent ve Danışmanlık Hizmetleri</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--text-muted)' }}>Merkez Ofis</h4>
              <p>Bulgurlu Mh. Bağcılar Cd. No:10/<br />Üsküdar, İstanbul</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--text-muted)' }}>İletişim</h4>
              <p><a href="tel:+905555555555" style={{ color: 'var(--accent)' }}>+90 555 555 55 55</a></p>
              <p><a href="mailto:info@ozypatent.com" style={{ color: 'var(--accent)' }}>info@ozypatent.com</a></p>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--text-muted)' }}>Çalışma Saatleri</h4>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '2 1 400px' }}>
          <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>Ad Soyad</label>
                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>E-posta</label>
                <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Telefon Numarası</label>
              <input type="tel" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Konu</label>
              <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option>Marka Tescili</option>
                <option>Patent Sorgulama</option>
                <option>Tasarım Tescili</option>
                <option>Diğer</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Mesajınız</label>
              <textarea rows="5" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" id="kvkk" />
              <label htmlFor="kvkk" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>KVKK Aydınlatma Metnini okudum ve kabul ediyorum.</label>
            </div>

            <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Mesajı Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
}
