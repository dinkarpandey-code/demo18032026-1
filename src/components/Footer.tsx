interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
