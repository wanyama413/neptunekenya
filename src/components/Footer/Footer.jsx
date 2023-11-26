import "../../x.css";
import AccountsAndRecords from "../../assets/AccountsAndRecords.pdf";
import Approval from "../../assets/Approval.pdf";
import certificateOfProperManagement from "../../assets/certificateOfProperManagement.pdf";
import seal from "../../assets/seal.pdf";
import chevron from "../../assets/chevron.svg";

import { Link } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  const handleCollapsibleClick = function (event) {
    event.currentTarget.classList.toggle("collapsible--expanded");
  };

  useEffect(() => {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach((item) => {
      item.addEventListener("click", handleCollapsibleClick);
    });

    return () => {
      collapsibles.forEach((item) => {
        item.removeEventListener("click", handleCollapsibleClick);
      });
    };
  }, []);
  return (
    <div>
      <div className="container">
        <div className="callout callout--primary callout-signup">
          <div className="grid grid--1x2">
            <div className="callout__content">
              <h2 className="callout__heading">
                Helping People With Disabilities
              </h2>
              <p className="tagline">
                isn`t just an act of kindness; it`s a commitment to creating a
                world where everyone has the opportunity to thrive, breaking
                down barriers one gesture at a time.
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.jgive.co.il/new/en/ils/charity-organizations/444"
              className="btn btn--secondary btn--stretched"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section className="collapsible collapsible--expanded footer__section">
            <div className="collapsible__header">
              <Link to="/about-us">
                <h2 className="collapsible__heading footer__heading">
                  about us
                </h2>
              </Link>
            </div>
          </section>
          <section className="collapsible footer__section">
            <div className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">
                follow us
              </h2>
              <img
                onClick={handleCollapsibleClick}
                className="icon icon--white collapsible__chevron"
                src={chevron}
                alt=""
              />
            </div>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a
                    href="https://www.facebook.com/ilan.il.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ilan_association/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ilan-il/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="collapsible footer__section">
            <div className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">
                Downloads
              </h2>
              <img
                className="icon icon--white collapsible__chevron"
                src={chevron}
                alt=""
              />
            </div>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a download={true} href={certificateOfProperManagement}>
                    Certificate of Proper Management
                  </a>
                </li>
                <li>
                  <a download={true} href={seal}>
                    Midot Seal of Effectiveness
                  </a>
                </li>
                <li>
                  <a download={true} href={AccountsAndRecords}>
                    Approval for Donations Integration (Tax Odinance Section 46)
                  </a>
                </li>
                <li>
                  <a download={true} href={Approval}>
                    Approval for Management of Accounts and Records
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div className="footer__brand">
            <img src="images/logo.svg" alt="" />
            <p className="footer__copyright">{`Copyright ${new Date().getFullYear()} ILAN`}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
