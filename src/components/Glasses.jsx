import GlassesBox from "../pathcomponents/GlassesBox";

export default function Glasses() {
  let Glassesbox = [
    {
      src: "images/glass1.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass2.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass3.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass4.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass5.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass6.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass7.png",
      price: 50,
      title: "Sunglasses",
    },
    {
      src: "images/glass8.png",
      price: 50,
      title: "Sunglasses",
    },
  ];

  return (
    <div className="glasses">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="titlepage">
              <h2>Our Glasses</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labor e et dolore magna aliqua. Ut
                enim ad minim veniam, qui
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {Glassesbox.map((item, index) => (
            <GlassesBox
              key={index}
              src={item.src}
              price={item.price}
              title={item.title}
            ></GlassesBox>
          ))}
          <div className="col-md-12">
            <a className="read_more" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
