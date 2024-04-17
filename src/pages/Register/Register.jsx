// import { get } from "firebase/database";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const {createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")
    const handleRegister = e =>{
        console.log(e.currentTarget);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo')


        if(password.length<6){
          toast.warn("password must be 6 characters")
          return
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
          toast.warn("Password must be added uppercase and lowercase")
          return
        }
        
      
        
        setError('')

        console.log(email, password, name, photo);

        createUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error => {
          console.error(error)
        })
        toast.success('User Created Successfully');
    }
    
    return (
        <div>
          <Helmet>
            <title>
              Register
            </title>
          </Helmet>
        {/* <h2 className="text-center">this is Login</h2> */}
        <div className="hero min-h-screen lg:w-1/2 md:w-3/4 bg-base-200 mx-auto">
<div className="hero-content flex-col">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register now!</h1>
  
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" name="name" required placeholder="name" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="photo" name="photo" required placeholder="photo" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" required placeholder="email" className="input input-bordered"  />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type={ showPassword ? "text" : "password"} name="password" placeholder="Type here" className="input input-bordered w-full " />
                    <span className="absolute top-[365px] right-12" onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
      {
        error && <small className="text-red-500">{error}</small>
      }
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-violet-300">Login</button>

    </div>
  </form>
  <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 ml-6">Login</Link></p>
</div>
</div>
</div>
<ToastContainer />
    </div>
    );
};

export default Register;