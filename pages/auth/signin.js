import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser
function signin({ providers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your sign-in logic here
  };

  const handleGoogleSignIn = () => {
    // Your Google sign-in logic here
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50 fixed top-0 left-0 w-screen h-screen m-0 p-0">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                create an account
              </a>
            </p>
          </div>

          {/* Google Sign on */}
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Sign in with {provider.name}</span>
                </button>
              </div>
            </div>
          ))}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineMail
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="mt-1">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiLockPasswordFill
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <p className=" ml-2 text-center text-sm text-gray-600">
                  Remember me
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <>
    //   {Object.values(providers).map((provider) => (
    //     <div key={provider.name}>
    //       <button
    //         onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
    //       >
    //         Sign in with {provider.name}
    //       </button>
    //     </div>
    //   ))}
    // </>
  );
}

//Server (server-side render)
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
