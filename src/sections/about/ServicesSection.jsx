import { services } from '../../data/about.js'

export default function ServicesSection() {
  return (
    <section className="about-services" id="skills" aria-labelledby="skills-title">
      <h2 className="about-services-heading" id="skills-title">
        Technical Arsenal
      </h2>

      {services.map((service) => (
        <article key={service.title}>
          <img className="about-service-icon" src={service.icon} alt="" aria-hidden="true" />
          <div>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
