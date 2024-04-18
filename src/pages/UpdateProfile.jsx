import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {
  const {user} = useContext(AuthContext);

  const handleUpdateProfile = e =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.photoURL.value);
    const formData ={
      displayName: e.target.name.value,
      photoURL: e.target.photoURL.value
    }

    updateProfile(user, formData)
    .then(
      // window.location.reload()
    )
    .catch(error =>{
      console.log(error);
    })
  }
    return (

<div className="hero min-h-screen lg:w-1/2 md:w-3/4 bg-base-200 mx-auto">
<Helmet>
        <title>UpDateProfile</title>
      </Helmet>
<div className="hero-content flex-col">


<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Update Your Profile</h1>
  
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleUpdateProfile} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" defaultValue={user?.displayName} name="name" required placeholder="name" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="photo" defaultValue={user?.photoURL} name="photoURL" required placeholder="photo" className="input input-bordered"  />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" disabled required placeholder="email" className="input input-bordered"  />
    </div>

    
    <div className="form-control mt-6">
      <button className="btn bg-violet-300">Update Profile</button>

    </div>
  </form>
  
</div>
</div>
</div>
    );
};

export default UpdateProfile;