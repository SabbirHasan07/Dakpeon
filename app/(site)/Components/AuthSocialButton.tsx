import { type } from "os";
import {IconType} from "react-icons"
interface AuthSocialButtonProps{
    icon:IconType,
    onClick:()=>void;
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> =({
    icon: Icon,
    onClick
})=>{
    return(
       <button
       type="button"
       onClick={onClick}
       className="
       inline-flex w-full justify-center rounded-md bg-slate-500 px-4 py-2 to-gray-500
       shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-600 focus:outline-offset-0
       "
       >
        <Icon className="text-white"/>

       </button>
    )
}
export default AuthSocialButton;