import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="mb-6">
                <h1 className="text-5xl">Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center mb-4">
                    <p>Do not have an account <Link to={'/register'}><span className="text-blue-600 hover:font-medium">Create account</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;