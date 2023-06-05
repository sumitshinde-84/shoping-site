import "./style/dispatch.css"
const Dispatch = ({ addressFormData, getAddressFormData,postOrder }) => {
    const changeHandler = () => {
      getAddressFormData(null);
    };
  
    return (
      <div className="dispatch">
        <h1>ronex</h1>
        <div className="contact-deliver-info-box">
          <div className="contact">
            <p className="feild-name">Contact</p>
            <p className="feild-data">{addressFormData.phone}</p>
            <p onClick={changeHandler} className="change-link">
              change
            </p>
          </div>
          <div className="deliver-to">
            <p className="feild-name">Deliver to</p>
            <p className="feild-data">{`${addressFormData.appartment}, ${addressFormData.city},${addressFormData.country}`}</p>
            <p onClick={changeHandler} className="change-link">
              change
            </p>
          </div>
        </div>
        <h3 className="dispatch">Dispatch</h3>
        <div className="dispatch-main">
            <p className="dispatch-type">Standard <span>Free</span></p>
        </div>
        <button onClick={postOrder} >Demo pay</button>
      </div>
    );
  };
  
  export default Dispatch;
  