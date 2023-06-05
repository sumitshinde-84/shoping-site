import { useState } from "react"
import "./style/addressForm.css"
const AddressForm = ({getAddressFormData}) => {
    const [formData, setFormData] = useState({
        phone:"",
        country:"",
        company:"",
        appartment:"",
        postalCode:"",
        city:""

    })
    const [errors, setErrors] = useState({});

    const InputHandler= (e)=>{
        const {name, value} = e.target
        setFormData((prevState)=>({
            ...prevState,
            [name]:value,
        }));
        console.log(formData)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
          getAddressFormData(formData)
          console.log(formData);
        } else {
         
          setErrors(validationErrors);
        }
      };
      const validateForm = () => {
        let errors = {};
      
        if (!formData.phone) {
          errors.phone = "Phone is required";
        }
      
        if (!formData.country) {
          errors.country = "Country is required";
        }
      
        
      
        if (!formData.appartment) {
          errors.appartment = "Apartment is required";
        }
      
        if (!formData.postalCode) {
          errors.postalCode = "Postal Code is required";
        }
      
        if (!formData.city) {
          errors.city = "City is required";
        }
      
        return errors;
      };
      
    return (
        <div className="addressform">
            <h1>ronex</h1>
            < form onSubmit={(e)=>{submitHandler(e)}} form action="">
                <h2>Contact</h2>
                <p className="input-para">
                <label htmlFor="phone"  className="address-lable">phone</label>
                <input type="tel" id="phone" name="phone"  onChange={InputHandler} value={formData.phone}/>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
                </p>
                
                <h2>Delivery address</h2>
                <p className="input-para">
                <lable className="address-lable">country</lable>
                <input type="text" id="country" name="country"  onChange={InputHandler} value={formData.country} />
                {errors.country && <span className="error-message">{errors.country}</span>}
                </p>
                
                <p className="input-para">
                    <lable className="address-lable">company</lable>
                    <input type="text" id="company" name="company"  onChange={InputHandler} value={formData.company} />
                    
                </p>
                <p className="input-para">
                    
                    <lable className="address-lable">appartment</lable>
                    <input type="text" id="appartment" name="appartment"  onChange={InputHandler} value={formData.appartment}/>
                    {errors.appartment && <span className="error-message">{errors.appartment}</span>}
                </p>
               
               
               
                
                <p className="postal-city">
                <p className="input-para">
                    <lable className="address-lable">postal-code</lable>
                    <input type="tel" id="postal-code" name="postalCode"  onChange={InputHandler} value={formData.postalCode} />
                    {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                </p>
                <p className="input-para">
                    <lable className="address-lable">city</lable>
                    <input type="text" id="city" name="city"  onChange={InputHandler} value={formData.city} />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                </p>
              
                </p>
                <button type="submit">proceed to shipping</button>

            </form>
        </div>
    )

}


export default AddressForm