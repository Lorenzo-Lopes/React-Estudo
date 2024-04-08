import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Container from "./Container"
import logo from '../../img/costs_logo.png'

function Navbar(){
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="CostsAPP-Logo" />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject">New Project</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar