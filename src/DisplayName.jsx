import { useState } from "react";
import { RiFileWarningFill } from "react-icons/ri";


const DisplayName = () => {

    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ submit, setSubmit ] = useState(false);
    const [ error, setError ] = useState({ firstname: false, lastname: false });

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        if (field === "firstname") {
            setFirstname(value);
            setError({ ...error, firstname: value.trim() === "" });
        } else if (field === "lastname") {
            setLastname(value);
            setError({ ...error, lastname: value.trim() === "" && firstname.trim() !== "" });
        }
    }
 
    const handleSubmit = (e) => {

        e.preventDefault();

        const newError = {
            firstname: firstname.trim() === "",
            lastname: lastname.trim() === "" && firstname.trim() !== ""
        };

        setError(newError);

        if(!newError.firstname && !newError.lastname){
            setSubmit(true);
        }else{
            setSubmit(false);
        }

    }
    
    return (
        <>
        <h1>Full Name Display</h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="firstname">First Name:</label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => handleInputChange(e, "firstname")}
            />
            {error.firstname && (
              <div style={{ display: "flex", alignItems: "center", border: "1px solid black", width: "50%" }}>
                <RiFileWarningFill style={{ color: "orange", padding: "2px" }} />
                Please fill this field.
              </div>
            )}
          </div>

          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => handleInputChange(e, "lastname")}
            />
            {error.lastname && (
              <div style={{ display: "flex", alignItems: "center", border: "1px solid black", width: "50%" }}>
                <RiFileWarningFill style={{ color: "orange", padding: "2px" }} />
                Please fill this field.
              </div>
            )}
          </div>
          
          <button type="submit">Submit</button>
          {submit && (
            <p id="full-name">Full Name: {firstname} {lastname}</p>
          )}
        </form>
      </>
    )
}

export default DisplayName;