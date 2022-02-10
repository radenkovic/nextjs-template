// import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import moment from "moment";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    const cookies = new Cookies();
    const token = jwt.sign(data, "<REPLACE_THIS_KEY>");
    cookies.set("jwt", token, {
      expires: moment().add(10, "minutes").toDate(), // TODO: read from JWT expiry date -- must match
    });
    // Redirect to '/about' (protected page)
    router.push("/about");
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("jwt");
  };
  return (
    <div className="justify-center p-10">
      <div className="max-w-xs w-50">
        <form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="py-2 px-3 w-full leading-tight text-gray-700 rounded border focus:outline-none shadow appearance-none"
              {...register("username", { required: true })}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="py-2 px-3 mb-3 w-full leading-tight text-gray-700 rounded border focus:outline-none shadow appearance-none focus:shadow-outline"
              {...register("password", { required: true })}
              type="password"
              placeholder="******************"
            />
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500">
          &copy;2022 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
