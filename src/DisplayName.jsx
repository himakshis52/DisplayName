import { useState } from "react";
import { RiFileWarningFill } from "react-icons/ri";


const DisplayName = () => {

    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ submit, setSubmit ] = useState(false);
    const [ error, setError ] = useState({ firstname: false, lastname: false })

    const haldleSubmit = (e) => {

        e.preventDefault();

        const newError = {
            firstname: firstname.trim() === "",
            lastname: lastname.trim() === ""
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
                onSubmit={haldleSubmit}
               >
                <p>

                    First Name: <input onChange={(e) => setFirstname(e.target.value)}/>   
                    {
                    error.firstname &&
                    <p style={{display: "flex", alignItems: "center", marginLeft: "90px", border: "1px solid black", width: "10%"}}>
                        <RiFileWarningFill style={{color: "orange", padding: "2px"}}/> Please fill this field.
                    </p>
                    }  

                </p>
                <p>

                    Last Name: <input onChange={(e) => setLastname(e.target.value)}/>
                    {/* {
                    error.lastname &&
                    <p style={{display: "flex", alignItems: "center", marginLeft: "90px", border: "1px solid black", width: "10%"}}>
                        <RiFileWarningFill style={{color: "orange", padding: "2px"}}/> Please fill this field.
                    </p>
                    }   */}

                </p>
                
                    <button>
                        Submit
                    </button>

                    {
                        submit && (
                            <p>Full Name : {firstname} {lastname}</p>
                        )
                    }
                                                    
            </form>
        </>
    )
}

export default DisplayName;