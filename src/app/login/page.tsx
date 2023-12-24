'use client'
import { useState } from "react";
import InputSpace from "@/app/components/inputSpace";
import { useRouter } from "next/navigation";

const Login = () => {
    const [loginid, setLoginid] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const submitLoginDetails = () => {
        router.push('./')
    }
    const register = () => {
        router.push('../register')
    }

  const loginarr = [
    {
      placeholder: "Type Email ID or Mobile Number",
      type: "string",
      value: loginid,
    },
    {
      placeholder: "Type Password",
      type: "password", // Assuming it's a password field
      value: password,
    },
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center border bg-danger" style={{height: "100vh"}}>
      <h3>Login</h3>
      {loginarr.map(({ placeholder, type }, index) => (
        <div key={index}>
          <InputSpace
                  placeholder={placeholder}
                  type={type}
                  classList={" mt-3"}          />
        </div>
      ))}
      <button onClick={submitLoginDetails} className="mt-4">Submit</button>
      <p className="mt-1" onClick={register}>Or Register</p>
    </div>
  );
};

export default Login;
