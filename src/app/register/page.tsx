'use client'
import { type } from "os";
import inputSpace from "../components/inputSpace"

const Register: any = () => {
    const registerArr = [
        {
        placeholder: "Your Name",
        type: "string",
        },
        {
        placeholder: "Email",
        type: "Email",
        },
        {
        placeholder: "Password",
        type: "password",
        },
        {
        placeholder: "Repeat your Password",
        type: "password",
        },
        {
        placeholder: "Mobile Number",
        type: "Number",
        },
    ]
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center border bg-danger">
            <h2>First Time</h2>

            
            <inputSpace placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={onclick} 
                  classList={" mt-3"}  />
        </div>
    )

}

export default Register;