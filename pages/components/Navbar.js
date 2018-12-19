import Link from "next/link";

const Navbar = () => (
  <div id="navbar-wrapper">
    <div className="firstNavLine">
      <i className="fas fa-phone" />
      041 726 0874
    </div>
    <div className="secondNavLine">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand">
          <p>Brand Logo</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobileNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mobileNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/iphone">
                <a className="nav-link">iPhone</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/samsung">
                <a className="nav-link">Samsung</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/huawei">
                <a className="nav-link">Huawei</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/accessories">
                <a className="nav-link">Accessories</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default Navbar;
