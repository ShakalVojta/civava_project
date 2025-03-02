import React from 'react'
import '../../../../css/pages/Home/components/CertificationsSection.css'

const CertificationsSection = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Certifikace</h2>
        
        <div className="certifications-grid">
          <div className="certification-card">
            <img src="/images/certifications/neuroleadership.png" alt="NeuroLeadership Institute" />
            <h3>NeuroLeadership Institute</h3>
          </div>
          
          <div className="certification-card">
            <img src="/images/certifications/icf-czech.png" alt="ICF Czech Republic" />
            <h3>ICF Czech Republic</h3>
          </div>
          
          <div className="certification-card">
            <img src="/images/certifications/neuroleadership2.png" alt="NeuroLeadership" />
            <h3>NeuroLeadership</h3>
          </div>
          
        </div>
        
        <div className="certifications-text">
          <p>Kontinuálně se vzdělávám v oblasti neurovědy, koučinku a osobního rozvoje, abych vám mohla poskytovat ty nejkvalitnější služby podložené vědeckými poznatky.</p>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection