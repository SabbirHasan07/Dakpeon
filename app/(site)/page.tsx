import AuthForm from "./Components/AuthForm";

export default function Home() {
    return (
      <div
      className="
      flex
      min-h-full
      flex-col
      text-center
      py-9
      sm:px-6
      lg:px-8
      bg-gray-400
      "
      >
       <div className="sm:mx-auto sm:w-full sm:mx-w-md">
        <p className="mx-auto w-auto text-3xl font-semibold text-gray-800" >Dak<span className="font-light text-orange-700 ">Peon</span></p>
        <h2 className="
        mt-4
        text-center
        text-3xl
        font-md
        tracking-tight
        text-gray-700
        ">
            Sign in to your account

        </h2>

       </div>
       <AuthForm/>
      </div>
    )
  }