export default function DivClient(props) {
  return (
    <div className={props.class}>
      <div className="container">
        <div className="carousel-caption ">
          <div className="row">
            <div className="col-md-12">
              <div className="clients_box">
                <figure>
                  <img src="images/our.png" alt="#" />
                </figure>
                <h3>{props.name}</h3>
                <p>{props.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
