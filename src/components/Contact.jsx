import InputContact from "../pathcomponents/InputContact";
import GoogleApiWrapper from "../pathcomponents/Map";

export default function Contact() {
  let inputContact = [
    {
      placeholder: "Name",
      type: "type",
      name: "Name",
    },
    {
      placeholder: "Phone Number",
      type: "type",
      name: "Phone Number",
    },
    {
      placeholder: "Email",
      type: "type",
      name: "Email",
    },
    {
      placeholder: "Message",
      type: "type",
      name: "Message",
    },
  ];

  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form id="request" className="main_form">
              <div className="row">
                <div className="col-md-12 ">
                  <h3>Contact Us</h3>
                </div>
                {inputContact.map((item, index) => (
                  <InputContact
                    key={index}
                    placeholder={item.placeholder}
                    type={item.type}
                    name={item.name}
                  ></InputContact>
                ))}
                <div className="col-md-12">
                  <button className="send_btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="map_section">
          <div id="map">
            <GoogleApiWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
