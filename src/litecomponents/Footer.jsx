import LiFooter from "../pathcomponents/LiFooter";

export default function Footer() {
  let liFooter = [
    {
      href: "/",
      iClass: "fa fa-map-marker",
      content: "Location",
    },
    {
      href: "/",
      iClass: "fa fa-phone",
      content: "+01 1234567890",
    },
    {
      href: "/",
      iClass: "fa fa-envelope",
      content: "demo@gmail.com",
    },
  ];
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <ul className="location_icon">
                {liFooter.map((item, index) => (
                  <LiFooter
                    key={index}
                    href={item.href}
                    iClass={item.iClass}
                    content={item.content}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  © 2019 All Rights Reserved. Design by
                  <a href="https://html.design/"> Free Html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
