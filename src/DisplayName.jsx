import { useState } from "react";



const DisplayName = () => {

    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ submit, setSubmit ] = useState(false);
   
    
 
    const handleSubmit = (e) => {

        e.preventDefault();

        if(firstname.trim() !== "" && lastname.trim() !== ""){
            setSubmit(true);
        }

        

    }
    
    return (
        <>
            <h1>Full Name Display</h1>
            <form 
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection:"column"}}
               >
                <div>
                <label htmlFor="firstname">
                    First Name:
                    </label>
                    
                    <input type="text" required={true} id="firstname"
                        onChange={(e) => setFirstname(e.target.value)}/> 
                </div>

                <div>
                    <label htmlFor="lastname">

                        Last Name:
                    </label>
                    <input type="text" value={lastname} required={true} id="lastname"
                    onChange={(e) => setLastname(e.target.value)}/>
                </div>
                          
                <button
                    style={{ width: "8%"}}
                        type="submit"
                    >
                        Submit
                </button>

            </form>

                {
                    submit && (
                            
                        <h4>Full Name: {firstname} {lastname}</h4>
                            
                            
                    )
                }
                                                    
            
        </>
    )
}

export default DisplayName;