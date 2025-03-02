import React from 'react';
import '../../../../css/pages/Home/components/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">Služby</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 18h.01" />
                <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2.5" />
                <path d="M16 9h.01" />
                <path d="M8 9h.01" />
                <path d="M12 13V9" />
                <path d="M3 8.5v7.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5" />
                <path d="m5.5 7.5 3-3h7l3 3" />
              </svg>
            </div>
            <h3>Neurověda</h3>
            <p>Koučing založený na principech neurovědy, který pomáhá porozumět tomu, jak mozek funguje a jak jej optimálně využívat.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                <path d="m12 12 4 2" />
                <path d="m12 12 3-4" />
                <path d="M12 7V5" />
                <path d="M12 19v-7" />
              </svg>
            </div>
            <h3>Accountability</h3>
            <p>Podpora a zodpovědnost při dosahování vašich cílů. Pomůžu vám udržet motivaci a sledovat pokrok.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
                <circle cx="18" cy="18" r="3" />
                <path d="M18 15v1.5l1 1" />
              </svg>
            </div>
            <h3>Osobní rozvoj</h3>
            <p>Individuální přístup k rozvoji vašeho potenciálu a nalezení silných stránek pro úspěšný osobní i profesní život.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Týmový koučink</h3>
            <p>Rozvoj týmové spolupráce, komunikace a efektivity při dosahování společných cílů v pracovním prostředí.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3>Kariérní poradenství</h3>
            <p>Pomoc při hledání profesního směřování, příprava na pracovní pohovory a plánování kariérního růstu.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Life Balance</h3>
            <p>Nalezení rovnováhy mezi pracovním a osobním životem, prevence vyhoření a budování zdravých návyků.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;