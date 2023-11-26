import React from "react";
import photo from "../assets/a-KOBI9600.jpg";
import styles from "./AboutUs.module.css";
import one from "../assets/AccountsAndRecords.png";
import two from "../assets/Approval.png";
import four from "../assets/seal.png";
import three from "../assets/certificateOfProperManagement.png";
import Accounts from "../assets/AccountsAndRecords.pdf";
import { useState } from "react";
import Modal from "../components/Modal.jsx/Modal";
const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <section className={styles.aboutContent}>
        <div className={styles.textContainer}>
          <p>
            The Ilan Association strives to enable people with physical
            disabilities to live meaningful and high-quality lives. Since 1952,
            spurred by the polio virus outbreak, ILAN has been providing a wide
            range of activities for children and adults with disabilities to
            enable them to live independently and integrate into society. In
            over 30 cities across Israel, we provide a wide variety of programs
            for children and adults with physical disabilities and their family
            members, helping to improve motor skills, build self-confidence, and
            create a sense of long-term ability. ILAN members include children
            and adults with physical disabilities - such as cerebral palsy,
            muscular dystrophy, muscle and nerve diseases - who rely on
            wheelchairs, canes, walkers or crutches for movement and need a
            variety of services and treatments. We believe that it is our duty
            to provide people with disabilities of any age, religion or gender -
            from the moment the disability is detected and throughout their
            lives - with all the services and treatments they need to reach
            their personal potential, achieve maximum independence, and
            integrate into society. We at ILAN do our upmost to fulfill the
            dreams of thousands of children and adults with disabilities
            through: programs
            <ul>
              <li> (day centers, dormitories, and an employment promotion)</li>
              <li> promotion of policies, rights, and government relations</li>
              <li>culture and society</li>
              <li>rehabilitation and sports</li>
            </ul>
            <p className={styles.last}>
              Join us in promoting ILAN's vital vision! Help people with
              physical disabilities realize their dreams - to be with everyone,
              like everyone!
            </p>
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.jgive.co.il/new/en/ils/charity-organizations/444"
          >
            <button className={styles.donateBtn}>
              DONATE TO HELP US HELP THEM
            </button>
          </a>
        </div>

        <div className={styles.photoContainer}>
          <img className={styles.photo} src={photo} alt="" />
        </div>
      </section>
      <section>
        <h2>Financial Documents</h2>
        <div className={styles.documents}>
          <article>
            <figure>
              <img className={styles.phot} src={three} alt="" />
            </figure>
            <figcaption>Certificate of Proper Management</figcaption>
            <button>View Full Document</button>
          </article>
          <article>
            <figure>
              <img className={styles.phot} src={four} alt="" />
            </figure>
            <figcaption>Midot Seal of Effectiveness</figcaption>
            <button>View Full Document</button>
          </article>
          <article>
            <figure>
              <img className={styles.phot} src={two} alt="" />
            </figure>
            <figcaption>
              Approval for Donations Integration (Tax Ordinance Section 46)
            </figcaption>
            <button>View Full Document</button>
          </article>
          <article>
            <figure>
              <img className={styles.phot} src={one} alt="" />
            </figure>
            <figcaption>
              Approval for Management of Accounts and Records
            </figcaption>
            <div>
              <button onClick={openModal}>View Full Document</button>
              {isModalOpen && (
                <Modal onClose={closeModal} iframeSrc={Accounts} />
              )}
            </div>
          </article>
        </div>
        {/* <iframe
          src={Accounts}
          frameBorder="0"
          height="500px"
          width="100%"
        ></iframe> */}
      </section>
    </div>
  );
};

export default AboutUs;
