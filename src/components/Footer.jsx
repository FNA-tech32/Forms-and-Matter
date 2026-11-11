import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowUp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Top Studio Identity Bar */}
        <div className="footer-brand-bar">
          <div className="footer-brand-info">
            <a
              href="#hero"
              className="footer-logo"
              aria-label="Form&Matter"
              dir="ltr"
            >
              <span className="logo-dot" />
              Form&<span>Matter</span>
            </a>
            <p className="footer-tagline">{t("footer_tagline")}</p>
          </div>

          <div className="footer-status-pill" dir="ltr">
            <span className="status-ping" />
            <span>{t("footer_status")}</span>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t("footer_contacts")}</h4>

            <ul className="footer-list">
              <li>
                <span className="footer-icon-box">
                  <FaPhone className="footer-icon" />
                </span>
                <a href="tel:+15550192834" dir="ltr">
                  +1 (555) 019-2834
                </a>
              </li>

              <li>
                <span className="footer-icon-box">
                  <FaPhone className="footer-icon" />
                </span>
                <a href="tel:+15550192835" dir="ltr">
                  +1 (555) 019-2835 <span className="footer-alt-tag">({t("alt_phone_label")})</span>
                </a>
              </li>

              <li>
                <span className="footer-icon-box">
                  <FaEnvelope className="footer-icon" />
                </span>
                <a href="mailto:hello@formandmatter.studio" dir="ltr">
                  hello@formandmatter.studio
                </a>
              </li>

              <li>
                <span className="footer-icon-box">
                  <FaMapMarkerAlt className="footer-icon" />
                </span>
                <a
                  href="https://maps.google.com/?q=Innovation+Design+District"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("address")}
                </a>
              </li>
            </ul>

            <div className="footer-chat-btns">
              <a
                className="whatsapp-btn"
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <span>{t("whatsapp_btn")}</span>
              </a>

              <a
                className="telegram-btn"
                href="https://t.me/formandmatter"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
                <span>{t("telegram_btn")}</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t("footer_navigation")}</h4>

            <ul className="footer-list footer-nav-list">
              <li>
                <a href="#why">{t("nav_why")}</a>
              </li>
              <li>
                <a href="#services">{t("footer_services")}</a>
              </li>
              <li>
                <a href="#about">{t("footer_about_us")}</a>
              </li>
              <li>
                <a href="#faq">{t("footer_faq")}</a>
              </li>
              <li>
                <a href="#contact">{t("footer_contacts")}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("portfolio_web_dev")}</h4>

            <div className="footer-projects-group">
              <a
                className="footer-project-card"
                href="#services"
              >
                <span>{t("portfolio_web_dev")}</span>
                <FaExternalLinkAlt />
              </a>

              <a
                className="footer-project-card"
                href="#about"
              >
                <span>
                  {t("portfolio_maestrostudio")} — {t("portfolio_studio_site")}
                </span>
                <FaExternalLinkAlt />
              </a>
            </div>

            <h4 className="footer-subtitle">{t("footer_social_media")}</h4>

            <div className="socials">
              <a
                href="https://instagram.com/formandmatter"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/company/formandmatter"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/formandmatter"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer_copyright", { year: currentYear })}</p>
          <a href="#hero" className="footer-top-btn">
            <span>{t("footer_back_to_top")}</span>
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
