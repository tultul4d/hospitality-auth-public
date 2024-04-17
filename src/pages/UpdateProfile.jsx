import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
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
  <form className="card-body">
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