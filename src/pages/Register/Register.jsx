import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onsubmit = async data => {
        const name = data.name;
        const email = data.email;
        const mobile = data.mobile;
        const pin = data.pin;

        const info = { name, email, mobile, pin }

        await axiosPublic.post('/user', info)
            .then(() => {
                toast.success('Registration successfull!');
                navigate('/')
            })
            .catch(() => {
                toast.error('Registration failed!');
            })
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="mb-6">
                <h1 className="text-5xl">Register</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile No</span>
                        </label>
                        <div className="w-full">

                            <input {...register("mobile")} type="number" placeholder="mobile" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input {...register("pin", { pattern: /^\d{5}$/ })} maxLength={5} type="password" placeholder="password" className="input input-bordered" required />
                        {
                            errors.pin && <p className="text-red-600 text-xl font-medium text-center mt-2">Pin must be 5 digit number</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="text-center mb-4">
                    <p>Already have an account <Link to={'/'}><span className="text-blue-600 hover:font-medium">Login</span></Link></p>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;