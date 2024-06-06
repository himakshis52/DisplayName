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
            <form 
                onSubmit={handleSubmit}
               >
                <p>

                    First Name:{" "} 
                    <input type="text" value={firstname}
                        onChange={(e) => handleInputChange(e, "firstname")}
                        data-testid="firstname-input"/>   
                    {
                    error.firstname &&
                    <p style={{display: "flex", alignItems: "center", marginLeft: "90px", border: "1px solid black", width: "10%"}}>
                        <RiFileWarningFill style={{color: "orange", padding: "2px"}}/> Please fill this field.
                    </p>
                    }  

                </p>
                <p>

                    Last Name:{" "} 
                    <input type="text" value={lastname}
                        onChange={(e) => handleInputChange(e, "lastname")}
                        data-testid="lastname-input"/>
                    {
                    error.lastname &&
                    <p style={{display: "flex", alignItems: "center", marginLeft: "90px", border: "1px solid black", width: "10%"}}>
                        <RiFileWarningFill style={{color: "orange", padding: "2px"}}/> Please fill this field.
                    </p>
                    }  

                </p>
                
                    <button
                        type="submit"
                    >
                        Submit
                    </button>

                    {
                        submit && (
                            <p data-testid="fullname-display">Full Name : {firstname} {lastname}</p>
                        )
                    }
                                                    
            </form>
        </>
    )
}

export default DisplayName;