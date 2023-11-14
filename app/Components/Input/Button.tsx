'use client'
import clsx from "clsx"
import { type } from "os"
import { on } from "stream";
interface ButtonProps{
    type?:'button' | 'submit' | 'reset' | undefined;
    fullWidth?:boolean;
    children?:React.ReactNode;
    onClick?:()=> void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
   

}

const Button:React.FC<ButtonProps> =({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
})=>{
    return(
        <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
        flex justify-center rounded-md px-14 py-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary? "to-gray-900" : 'text-white',
        danger? " bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600":
        !secondary && !danger && "bg-slate-500 hover:bg-slate-600 focus-visible:bg-slate-600"
        
        )}
        >
            {children}

        </button>
    )
}
export default Button