import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header(props) {
  const [style, setStyle] = useState({});

  function handleNavigate(ref) {
    return () =>
      ref["current"].scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
  }

  function handleScroll() {
    if (window.pageYOffset > 0)
      setStyle({ borderBottom: "1px solid rgb(222, 222, 222)" });
    else if (window.pageYOffset === 0) setStyle({});
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.conatiner} style={style}>
      <ul>
        <li
          onClick={handleNavigate(props.pages["home"])}
          className="gray-text-hover"
        >
          Home
        </li>
        <li
          onClick={handleNavigate(props.pages["skills"])}
          className="gray-text-hover"
        >
          Skills
        </li>
        <li
          onClick={handleNavigate(props.pages["portfolio"])}
          className="gray-text-hover"
        >
          Portfolio
        </li>
        <li
          onClick={handleNavigate(props.pages["contact"])}
          className="gray-text-hover"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Header;
