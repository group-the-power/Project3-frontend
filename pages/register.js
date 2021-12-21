import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// export async function getStaticProps(context){
//   const res = await fetch("/register")
//   const data = await res.json()

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [cf_password, setConfirmPassword] = useState("");
  const [courses, setCourses] = useState("");

  function handleSubmit() {
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      city: city,
      phoneNumber: phoneNumber,
      education: education,
      cf_password: cf_password,
      courses: courses,
    };
    axios
      .post("", data)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("users", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //axios or fetch post call to backend

  return (
    <div>
      {/* <Head>
        <title>Register Page</title>
      </Head> */}
      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">FullName</label>
          <input
            type="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf_password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={cf_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">City</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone Number</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Education</label>
          <input
            type="text"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Courses</label>
          <input
            type="text"
            name="Courses"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2">
          Already have an account?
          {/* <Link ><a style={{color: 'crimson'}}>Login Now</a></Link> */}
        </p>
      </form>
    </div>
  );
}
export default Register;
