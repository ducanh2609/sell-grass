export default function GlassesBox(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="glasses_box">
        <figure>
          <img src={props.src} alt="#" />
        </figure>
        <h3>
          <span className="blu">$</span>
          {props.price}
        </h3>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
