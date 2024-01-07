import DivClient from "../pathcomponents/DivClient";

export default function Client() {
  let divClient = [
    {
      name: "Sandy Mark",
      class: "carousel-item active",
      sub: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact a more-or-less normal distribution of letters,",
    },
    {
      name: "Sandy Mark",
      class: "carousel-item",
      sub: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact a more-or-less normal distribution of letters,",
    },
    {
      name: "Sandy Mark",
      class: "carousel-item",
      sub: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact a more-or-less normal distribution of letters,",
    },
  ];
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>What say our clients</h2>
              <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut la
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              id="myCarousel"
              className="carousel slide clients_Carousel "
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                {divClient.map((item, index) => (
                  <DivClient
                    key={index}
                    class={item.class}
                    name={item.name}
                    sub={item.sub}
                  ></DivClient>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
