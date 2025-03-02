import React from 'react'
import '../../../../css/pages/Home/components/TestimonialsSection.css'

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Reference</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">Eva mi pomohla najít nový směr v mé kariéře. Její přístup založený na neurovědě mi umožnil lépe pochopit své silné stránky a využít je v pracovním životě.</p>
              <div className="client-info">
                <h4 className="client-name">Jana Nováková</h4>
                <p className="client-position">Marketing Manager</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">Spolupráce s Evou byla transformativní. Po šestiměsíčním programu jsem dokázal překonat své limity a posunout se jak v osobním, tak profesním životě.</p>
              <div className="client-info">
                <h4 className="client-name">Petr Svoboda</h4>
                <p className="client-position">IT Specialista</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">Díky jednorázové konzultaci jsem dokázala identifikovat, co mi brání v dosažení mých cílů. Evin empatický přístup mi dodal odvahu udělat potřebné změny.</p>
              <div className="client-info">
                <h4 className="client-name">Martina Dvořáková</h4>
                <p className="client-position">Podnikatelka</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">Tříměsíční program s Evou mi pomohl překonat vyhoření a najít novou rovnováhu mezi prací a osobním životem. Doporučuji všem, kdo se cítí na hraně svých sil.</p>
              <div className="client-info">
                <h4 className="client-name">Tomáš Novotný</h4>
                <p className="client-position">Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection