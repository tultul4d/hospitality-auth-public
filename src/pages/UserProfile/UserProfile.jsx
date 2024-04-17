import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
// import { signOut } from "firebase/auth";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    // const handleSignOut = () =>{
    //     signOut(auth)
    //     .then(result => {
    //       setUser(null)
    //     })
    //     .catch(error => {
    //         console.log(eroor)
    //     })
    // }
    // const [users, setUser] = useState(null);
    return (
        <div className="card w-96 bg-gray-200 items-center lg:ml-96 md:ml-52 mb-2 shadow-xl">
      <Helmet>
        <title>UserProfile</title>
      </Helmet>
  <div className="card-body">


    <img className="rounded-lg" src={user.photoURL} alt="" />
    <h2 className="card-title"> <span className="font-mono">User :</span>{user.displayName
}</h2>
    <p className="font-mono">Email: {user.email}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-purple-300" >Sing Out</button>
    </div>
    
  </div>
</div>
    );
};

export default UserProfile;