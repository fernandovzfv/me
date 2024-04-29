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
            Hello, I'm <strong>Fernando Vázquez</strong>. I have been working as <strong>a mechanical engineer</strong> in the <strong>oil and gas industry</strong> (and other sectors) for about <strong>twenty three years</strong>, in almost every stage of the live of a plant (Design, fabrication, inspection, installation and commissioning).
          </p>
          <p>
            I have a lot of experience with mechanical <strong>equipment</strong>. I really enjoy working <strong>at the site</strong>, I mean working in <strong>construction</strong> and learning new things. I also love new <strong>challenges</strong>.
          </p>
          <p>
            Proficient in mexican and international standards and codes; such as ASME, API, TEMA, and European regulations.
          </p>
        </header>
        <ul className="icons major">
          {/* <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li> */}
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
            9 years of experience in execution of EPC projects in vearious industries.
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
            7 years of experience as mechanical supervisor in mechanical completion and commissioning works; ensuring quality and compliance with deadlines.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Construction of Pressure Vessels and Package Equipment
          </h2>
          <p>
            5 years of experience in construction os pressure vessels and package equipment in specialized workshops.
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
            <strong>PVEite | Compress</strong>
            <br />
            <strong>AMETank</strong>
            <br />
            <strong>
              ASPEN Exchanger Design and Rating
            </strong>
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Rahastan Refinery Project</h3>
            <p>
              Detail engineering of <strong>Shell & Tube Heat Exchangers</strong>.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
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
