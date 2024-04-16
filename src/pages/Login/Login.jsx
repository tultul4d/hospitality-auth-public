import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";



const Login = () => {
  const {singIn, googleLogin, github} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 
  console.log(location)



    const handleLogin = e =>{
        console.log(e.currentTarget);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        singIn(email, password)
        .then(result =>{
          console.log(result.user)


          navigate(location?.state ? location.state : '/' );
        })
        .catch(error =>{
          console.error(error);
        })

    }
    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result => console.log(result.user))
    }
    const handleGitHub = () =>{
        github()
        .then(result => console.log(result.user))
        
    }
    return (
        <div>
          <Helmet>
            <title>
              Login 
            </title>
          </Helmet>
            {/* <h2 className="text-center">this is Login</h2> */}
            <div className="hero min-h-screen lg:w-1/2 md:w-3/4 bg-base-200 mx-auto">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-violet-300">Login</button>

        </div>
      </form>
      <div className="flex gap-10">
      <div className="ml-7">
        
        <button onClick={handleGoogleLogin} className="btn bg-purple-200 ">Google Login</button>
      </div>
      <button onClick={handleGitHub} className="btn bg-purple-200 ">GitHub</button>
      </div>
      <p className="text-center mt-3">Do not have an account?<Link to="/register" className="text-blue-500 ml-6">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;