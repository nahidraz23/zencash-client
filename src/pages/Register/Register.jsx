import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="mb-6">
                <h1 className="text-5xl">Register</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile No</span>
                        </label>
                        <div className="w-full">
                            
                            <input type="number" placeholder="mobile" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input type="number" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="text-center mb-4">
                    <p>Already have an account <Link to={'/'}><span className="text-blue-600 hover:font-medium">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;