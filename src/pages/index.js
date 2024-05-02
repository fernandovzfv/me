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
            More than <strong>9 years</strong> of experience in execution of EPC projects in various industries (Oil & Gas, Chemical, Pharma, and Mining).
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
            About <strong>7 years</strong> of experience as mechanical supervisor in mechanical completion and commissioning works; ensuring compliance with the <strong>quality</strong> and <strong>deadlines</strong> requirements.
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
            I specialized in the desing, construction, inspection and installation of pressure vessels during at least <strong>6 years</strong> I worked for specialized workshops. But, I have been staying <strong>upgraded continuously</strong> due to my activities in <strong>EPC projects</strong> and as a <strong>freelancer</strong>. 
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
            2 years of experience in engineering and start-up of package equipment; ensuring its optimal operation.
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
