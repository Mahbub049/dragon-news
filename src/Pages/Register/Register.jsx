import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
        .then((UserCredential)=>{
            const user = UserCredential.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-[752px]">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 p-[97px] w-full shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body w-full">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                    <p className="text-center">Already Have An Account ? <Link to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;