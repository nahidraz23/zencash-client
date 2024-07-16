import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = async data => {
        const email = data.email;
        const pin = data.pin;

        const loginInfo = {email, pin}

        await axiosPublic.post('/users', loginInfo)
        .then(res => {
            if(res.data === "success"){
                navigate('/dashboard');
            }
            if(res.data === 'failed'){
                console.log(res.data)
            }
        })

      }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="mb-6">
                <h1 className="text-5xl">Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email/Mobile no</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="Enter your email/mobile no" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input {...register("pin", { pattern: /^\d{5}$/ })} maxLength={5} type="password" placeholder="password" className="input input-bordered" required />
                        {
                            errors.pin && <p className="text-red-600 text-xl font-medium text-center mt-2">Pin must be 5 digit number</p>
                        }
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

export default Login;