'use client'

import Button from "@/app/Components/Input/Button";
import Input from "../../Components/Input/Input";
import {useCallback ,useState } from "react"
import { FieldValues,useForm,SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import {BsGoogle} from "react-icons/bs"
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm =()=>{
    const [variant,setVariant] = useState <Variant> ('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(()=>{
        if(variant == 'LOGIN'){
            setVariant('REGISTER');
        }
        else{
            setVariant("LOGIN");
        }
    },[variant]);
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);
        if(variant=='REGISTER'){
            //AXIO Register
        }
        if(variant=='LOGIN'){
            //NEXTAUTH Register
        }
    }
    const socialAction = (action: string) =>{
        setIsLoading(true);
        //NEXTAUTH social Action
    }
    return(
        <div
        className="mt-4 sm:mx-auto sm:w-full sm:max-w-md"
        >
            <div
            className="bg-gray-200 px-4 py-8 shadow sm:rounded-lg sm:px-10"
            >
                <form 
                className="space-y-3 text-left"
                onSubmit={handleSubmit(onSubmit)}
                
                >
                    {
                        variant=='REGISTER' && (

                <Input id='name' label='Name' register={register}
                    errors={errors} disabled={isLoading}
                    />
                        )
                    }
                    <Input id='email' label='Email Address' type="email" register={register}
                    errors={errors}
                    disabled={isLoading}
                    />
                    <Input id='password' label='Password' type="password" register={register}
                    errors={errors} disabled={isLoading}
                    />
                    <Button
                    disabled={isLoading}
                    fullWidth
                    type="submit"
                    >{
                        variant == "LOGIN" ? 'Sign in' : 'Register'
                        
                        }</Button>
                </form>
                <div className="mt-2">
                    <div className=" relative ">
                        <div
                        className=" absolute inset-0 flex items-center "
                        >
                            <div className="w-full border-t border-gray-300"/>

                        </div>
                        <div className=" relative flex justify-center text-sm">
                            <span
                            className="bg-gray-200 px-2 text-gray-500 "
                            > Or continue with</span>

                        </div>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <AuthSocialButton
                        icon={BsGoogle}
                        onClick={()=>socialAction('google')}
                        />

                    </div>

                </div>
                <div className="flex mt-2 gap-1 justify-center">
                <div className="text-sm">
                    {variant=='LOGIN' ? 'New to here ?':'Already have an account?'}
                </div>
                <div 
                onClick={toggleVariant}
                className=" underline cursor-pointe text-sm"
                >
                    {variant=='LOGIN'?'Create an account':'Login'}
                </div>

                </div>
            </div>  
            
        </div>
    )
}
export default AuthForm