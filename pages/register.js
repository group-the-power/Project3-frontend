import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
//import valid from '../../../project3-backend/database/valid'
import { useRouter } from 'next/router'




// export async function getStaticProps(context){
//   const res = await fetch("/register")
//   const data = await res.json()



//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  
  
  
  const router = useRouter()
  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    
  }
  const handleSubmit = async e => 
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) 

    

    const res = await postData('controller/register', userData)
    if(res.err) 
    
  
    
    
  
  return(
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <form className="mx-auto my-4" style={{maxWidth: '500px'}}>
        <div className="form-group">
          <label htmlFor="name">FullName</label>
          <input type="text" className="form-control" id="name"
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
           />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">City</label>
          <input type="text" className="form-control" id="exampleInputPassword1"
           />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone Number</label>
          <input type="text" className="form-control" id="exampleInputPassword1"
           />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Education</label>
          <input type="text" className="form-control" id="exampleInputPassword1"
           />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2"
           />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>
        <p className="my-2">
          Already have an account? <Link href="/signin"><a style={{color: 'crimson'}}>Login Now</a></Link>
        </p>
      </form>
    </div>
  )
}
  export default Register