function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex flex-col space-y-5 justify-center m-15">
      <div className="flex justify-center space-x-5">
        <a
          href="https://github.com/jestevezsoarez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../github.png" className="w-8 h-8"/>
        </a>
        <a
          href="https://www.linkedin.com/in/javierdaniloestevezsoarez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../linkedin.png" />
        </a>
        <a
          href="https://www.instagram.com/jaesdeveloper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../instagram.png" />
        </a>
        <a href="https://x.com/JavierEstvez16" target="_blank" rel="noopener noreferrer">
          <img src="../twitter.png" />
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; {year} - Javier Est&eacute;vez. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
