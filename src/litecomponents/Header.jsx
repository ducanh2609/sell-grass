import { Link } from "react-router-dom";
import LiHeader from "../pathcomponents/LiHeader";

export default function Header() {
  let liProperty = [
    {
      class: "nav-item active",
      aClass: "nav-link",
      href: "/",
      content: "Home",
    },
    {
      class: "nav-item",
      aClass: "nav-link",
      href: "/about",
      content: "About",
    },
    {
      class: "nav-item",
      aClass: "nav-link",
      href: "/glasses",
      content: "Our Glasses",
    },
    {
      class: "nav-item",
      aClass: "nav-link",
      href: "/shop",
      content: "Shop",
    },
    {
      class: "nav-item",
      aClass: "nav-link",
      href: "/contact",
      content: "Contact Us",
    },
    {
      class: "nav-item d_none login_btn",
      aClass: "nav-link",
      href: "/",
      content: "Login",
    },
    {
      class: "nav-item d_none",
      aClass: "nav-link",
      href: "/",
      content: "Register",
    },
    {
      class: "nav-item d_none sea_icon",
      aClass: "nav-link",
      href: "/",
      content: undefined,
    },
  ];

  return (
    <header>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
                        alt=""
                        style={{ height: "70px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    {liProperty.map((item, index) => (
                      <LiHeader
                        key={index}
                        class={item.class}
                        aClass={item.aClass}
                        href={item.href}
                        content={item.content}
                      ></LiHeader>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
