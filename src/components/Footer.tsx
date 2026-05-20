export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <span className="comment">// </span>
        © {year} Sumeet Rane — Built with Next.js
      </p>
      <p className="footer-exit">
        <span className="prompt">$</span> exit 0
      </p>
    </footer>
  );
}
