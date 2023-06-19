import "./Footer.css";

function Footer() {
  return (
    <div className="footer-bar">
      <footer className="footer-tag">
        <span className="copyright-text">
          Copyright &copy; {new Date().getFullYear()} by&nbsp;
        </span>
        <span className="copyright-name">
          <a className="mail-link" href="mailto:krishnendu113@gmail.com">
            Krishnendu Chakraborty
          </a>
          .
        </span>
        <span className="rights-text"> All rights reserved</span>.
      </footer>
    </div>
  );
}
export default Footer;
