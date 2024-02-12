import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#" className="main-footer__social-link">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            alt=""
            className="main-footer__social-link-icon"
          />
        </a>
        <a href="#" className="main-footer__social-link">
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt=""
            className="main-footer__social-link-icon"
          />
        </a>
        <a href="#" className="main-footer__social-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            alt=""
            className="main-footer__social-link-icon"
          />
        </a>
        <a href="#" className="main-footer__social-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
            className="main-footer__social-link-icon"
          />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} TheFOODIES. All rights reserved.</p>
      </div>
      <div className="thanks">
        <p>Thanks for visiting!</p>
      </div>
    </footer>
  );
};

export default Footer;
