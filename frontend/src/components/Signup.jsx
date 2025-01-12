import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = async (data) => {
          const userInfo ={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
          }
          await axios.post("http://localhost:3005/user/signup",userInfo).then((res) => {
            console.log(res.data);
            if (res.data) {
            
              toast.success("Signed up Successfully");
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
          }).catch((err) => {
            if (err.response) {
              console.log(err);
            
             toast.error("Error: " + err.response.data.message)
            }
          });

        };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_2" className="border-[2px] shadow-md rounded-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="">
            <h3 className="font-bold  text-1xl">Signup</h3>

            <div className="mt-5 space-y-6">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })} 
              />
              <br />
              {errors.fullname && <span className="text-sm text-red-600">This field is required</span>}
              <br />
            </div>

            <div className="mt-5 space-y-6">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} 
              />
              <br />
              {errors.email && <span className="text-sm text-red-600">This field is required</span>}
              <br />

              {/* password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })} 
                />
                <br />
              {errors.password && <span className="text-sm text-red-600">This field is required</span>}
              <br />
                {/* Button */}
                <div className="flex justify-around mt-6">
                  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Login
                  </button>
                  <p>
                    Not registered?{" "}
                    <Link
                      to="/"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Login
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default Signup;
