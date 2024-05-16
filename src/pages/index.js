import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Specialist in static, heat transfer and package equipment
            <br />
            Oil & gas | Chemical | Mining
          </h2>
          <p>
            Hello, I'm <strong>Fernando Vázquez</strong>. I have been working as <strong>a mechanical engineer</strong> in the <strong>oil and gas industry</strong> (and other sectors) for about <strong>twenty three years</strong>, in almost every stage of the lifetime of a project (Design, fabrication, inspection, installation and commissioning).
          </p>
          <p>
            I really enjoy working <strong>in construction</strong> and learning new things. I also love new <strong>challenges</strong>.
          </p>
          <p>
            Proficient in mexican and international standards and codes; such as ASME, API, TEMA, and European regulations.
          </p>
        </header>
        <ul className="icons major">
          {config.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            EPC projects
          </h2>
          <p>
            With over <strong>nine years</strong> of experience in <strong>Engineering, Procurement, and Construction (EPC)</strong> projects, I have a wealth of knowledge in key industries that drive our global economy. My expertise spans across the Oil & Gas, Chemical, Pharmaceutical, and Mining sectors, indicating a versatile and robust skill set. This experience not only showcases my ability to deal with complex projects but also my adaptability to diverse working environments and challenges.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Construction and Mechanical Completion
          </h2>
          <p>
            With my <strong>seven years</strong> of experience in mechanical supervision, I’ve developed a strong skill set in overseeing <strong>mechanical completion and commissioning</strong> works. My role involves ensuring projects meet quality standards and are completed on time. I have a deep understanding of mechanical systems, strong leadership abilities, and a keen eye for detail, which I use to manage and coordinate team efforts. I’m well-versed in safety regulations and enforce them rigorously to maintain a safe working environment. My expertise significantly contributes to the efficiency and success of mechanical projects, as I’m responsible for the critical final stages before the handover or startup of facilities. My experience positions me to tackle complex challenges and lead teams towards successful project completions.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Pressure Vessels
          </h2>
          <p>
            With a robust background in the design, construction, inspection, and installation of <strong>pressure vessels</strong>, my expertise spans over <strong>six years</strong> in specialized workshops. This experience is complemented by my continuous professional development, a critical aspect in the dynamic field of engineering. My involvement in EPC (Engineering, Procurement, and Construction) projects has likely provided me with a comprehensive view of project management and execution, while my <strong>freelance</strong> work has added a versatile edge to my skill set. This combination of structured work environments and self-directed projects positions me well for future opportunities in the industry.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Engineering and Start-Up of Package Equipment
          </h2>
          <p>
            With <strong>two years</strong> of experience in engineering and the start-up of <strong>packaged equipment</strong>, I have a solid foundation in overseeing the complex process of bringing new systems online. My expertise involves planning and execution to ensure that all components work harmoniously and meet design specifications. I oversee the commissioning phase, crucial for verifying the functionality of equipment without process chemicals, and the start-up phase, where chemicals are introduced, and performance testing begins.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Relevant Projects and Skills</h2>
          <p>
            <strong>PVEite & Compress</strong>
            <br />
            <strong>AMETank & Tank</strong>
            <br />
            <strong>ASPEN Exchanger Design and Rating</strong>
            <br />
            <strong>Microsoft Office | Advanced user of Excel</strong>
            <br />
            <strong>Python & JavaScript</strong>
            <br />
            <strong>Agile & Prince2</strong>
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-paper-plane">
            <h3>Rahastan Refinery</h3>
            <p>
              Detail engineering of <strong>Shell & Tube Heat Exchangers</strong>. Project participation: 2 years.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Cementos Progreso</h3>
            <p>
              Supervision of manufacturing, equipment installation, and commissioning of mechanical equipment (<strong>API-650 storage tank, water treatment system, and firefighting system</strong>). Project participation: 1 year.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Thor Químicos de México</h3>
            <p>
              Responsible of the activities of mechanical completion and commissioning of <strong>mechanical equipment</strong> during the construction of two new plants. Project participation: 2 years.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Iquisa Noreste</h3>
            <p>
              Detailed engineering of <strong>static equipment</strong>, including engineering, procurement, and support to construction area. Project participation: more than 1 year.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Refinería Talara</h3>
            <p>
              Detailed engineering of crude oil storage tanks as per <strong>API-650</strong>. Project participation: 6 months.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Nissan Mexicana</h3>
            <p>
              Discipline leader for development of detailed engineering, procurement, and inspection of <strong>static equipment</strong>. Project participation: 6 months.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Learn More</h2>
          <p>
            For more information download my CV o see it online.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Download
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              See more
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export const Head = () => {
  return (
    <>
      <title>{config.heading}</title>
      <meta name="description" content="Spectral" />
      <meta name="keywords" content="site, web" />
      <html lang="en" />
    </>
  );
};

export default IndexPage;
