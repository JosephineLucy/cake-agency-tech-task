import "./styles.scss";

type FooterProps = {
  title: string;
};

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="app-footer">
      <p className="app-footer__title">{title}</p>
    </footer>
  );
};

export default Footer;
