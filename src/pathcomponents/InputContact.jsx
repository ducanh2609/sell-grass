export default function InputContact(props){
    return(
        <div className="col-md-12 ">
        <input
          className="contactus"
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
        />
      </div>
    )
}