import { useState } from "react";



const DisplayName = () => {

    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ submit, setSubmit ] = useState(false);
   
    
 
    const handleSubmit = (e) => {

        e.preventDefault();

        setSubmit(true)

    }
    
    return (
        <>
            <h1>Full Name Display</h1>
            <form 
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection:"column"}}
               >
                <label>
                    First Name:
                    <input type="text" required={true}
                        onChange={(e) => setFirstname(e.target.value)}/>   
                      

                </label>
              
                <label>

                    Last Name:
                    <input type="text" value={lastname} required={true}
                        onChange={(e) => setLastname(e.target.value)}/>
                    </label>
                
                    <button
                    style={{ width: "8%" }}
                        type="submit"
                    >
                        Submit
                    </button>

                    {
                        submit && (
                            <div>
                                <h4>Full Name: {firstname} {lastname}</h4>
                            </div>
                            
                        )
                    }
                                                    
            </form>
        </>
    )
}

export default DisplayName;