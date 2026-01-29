import {Link} from "react-router";
import {motion} from "motion/react"
import {useForm} from "react-hook-form";
import {useState} from "react";

const baseInputStyle = "w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/5 transition-all"
const validInputStyle = "border-stone-200 focus:border-[#FFD700] focus:ring-[#FFD700]/5"
const invalidInputStyle = "border-red-400 focus:border-red-500 focus:ring-red-500/10"

const handleRegister = async (data) => {
    console.log('Send registration request to backend')
    console.log(data)
    try {
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const responseJson = await response.json()

        if (!response.ok) {
            throw new Error(responseJson.message || "Registration failed.")
        }

        console.log(responseJson)

        //redirect here
    } catch (err) {
        console.log("Registration error", err)
        // display error to user
    }
}

const Eye = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const EyeOff = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
        <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
);

const RegisterPage = () => {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm()

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <motion.div
            initial={{x: "100%", opacity: 0}} // Starts off-screen to the right
            animate={{x: 0, opacity: 1}}      // Slides into the center
            exit={{x: "-100%", opacity: 0}}   // Slides off-screen to the left
            transition={{duration: 0.3, ease: "easeInOut"}}
        >
            <form className="space-y-6" onSubmit={(handleSubmit(handleRegister))}>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">
                        Name
                    </label>
                    <input
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Username has to be at least 3 characters"
                            }
                        })}
                        type="text"
                        className={`${baseInputStyle} ${errors.username ? invalidInputStyle : validInputStyle}`}
                        placeholder="Chef Bob"
                    />
                    <motion.div className="h-1 mt-1">
                        {errors.username && (
                            <motion.p
                                className="text-red-500 text-xs font-bold ml-1"
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                            >
                                {errors.username.message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">
                        Email
                    </label>
                    <input
                        {...register("email", {required: "Email is required"})}
                        type="email"
                        className={`${baseInputStyle} ${errors.email ? invalidInputStyle : validInputStyle}`}
                        placeholder="chef@goldenyolk.com"
                    />
                    <motion.div className="h-1 mt-1">
                        {errors.email && (
                            <motion.p
                                className="text-red-500 text-xs font-bold ml-1"
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                            >
                                {errors.email.message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label
                            className="text-xs font-black uppercase tracking-widest text-stone-400">
                            Password
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                            type={showPassword ? "text" : "password"}
                            className={`${baseInputStyle} ${errors.password ? invalidInputStyle : validInputStyle}`}
                            placeholder="••••••••"
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-amber-800 transition-colors"
                        >
                            {showPassword ? <EyeOff/> : <Eye/>}
                        </button>
                    </div>

                    <motion.div className="h-1 mt-1">
                        {errors.password && (
                            <motion.p
                                className="text-red-500 text-xs font-bold ml-1"
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                            >
                                {errors.password.message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>

                {/* Button: The "Signature" color */}
                <button
                    className="w-full bg-[#FFD700] hover:bg-[#FACC15] text-amber-950 font-bold py-4 rounded-xl shadow-lg shadow-yellow-900/10 transition-all transform hover:translate-y-[-1px] active:translate-y-[1px]">
                    Register
                </button>
            </form>

            <div className="mt-10 text-center">
                <p className="text-stone-500 text-sm font-medium">
                    Already have an account?
                    <Link to="/login"
                          className="text-amber-800 font-bold ml-2 hover:underline underline-offset-4 decoration-[#FFD700]"
                    >Login here</Link>
                </p>
            </div>
        </motion.div>
    )
}

export default RegisterPage