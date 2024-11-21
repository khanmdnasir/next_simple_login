 "use client"
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { LinkedInIcon, GoogleIcon, FacebookIcon } from './social_icons'

type LoginCardProps = {
  email: string,
  password: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  flashMessage: string,
  setFlashMessage: React.Dispatch<React.SetStateAction<string>>,
  isError: boolean,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  handleSubmit: React.FormEventHandler<HTMLFormElement>
}
export default function LoginCard({email, password, setEmail, setPassword, flashMessage, isError, handleSubmit}: LoginCardProps) {
  return (
    <div className="w-[300px] h-[450px] mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
      <h1 className="text-xl font-bold text-center mb-4">Drukland.de</h1>
      <h2 className="text-xl text-center">Sign In to your account</h2>
      <p className="text-center text-sm mb-4">
        Don&apos;t you have an account? <a href="#" className="font-bold">Register</a>
      </p>
          {flashMessage &&
              <div className={`"flex flex-row items-center justify-center text-red-600 mb-2`}>
                  <ExclamationCircleIcon className="h-3 w-5 mr-2" />
                  <span className="text-sm">{flashMessage}</span>
              </div>
          }
      <form className="space-y-1 flex-grow flex flex-col justify-between" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full border-b-2 border-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border-b-2 border-black focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree to all <a href="#" className="font-bold">Terms & Conditions</a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-1 rounded-md"
        >
          Log In
        </button>
        <div>
          <div className="flex items-center my-1">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-sm">or sign in with</span>
            <hr className="flex-grow border-t" />
          </div>
          <div className="flex justify-center space-x-4">
            <LinkedInIcon className="h-4 w-4 text-blue-700" />
            <GoogleIcon className="h-4 w-4 text-red-500" />
            <FacebookIcon className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      </form>
    </div>
  )
}

