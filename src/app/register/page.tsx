"use client";
import InputSpace from "@/app/components/inputSpace"
import newUsers from "@/app/components/newUsers"

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
      type: "string",
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

newUsers()
  return (
    <div className="d-flex flex-column justify-content-center align-items-center border bg-danger">
      <h2>First Time</h2>
      {registerArr.map(({ placeholder, type }) => {
      return (
       <InputSpace
          placeholder={placeholder}
          type={type}
          classList={" mt-3"}
          />)
      })}
    </div>
  );
};
export default Register;
