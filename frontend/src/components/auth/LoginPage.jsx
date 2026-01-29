import {Link} from "react-router";
import {motion} from "motion/react"

const LoginPage = () => {
    return (
        <>
            <motion.div
                initial={{x: "100%", opacity: 0}} // Starts off-screen to the right
                animate={{x: 0, opacity: 1}}      // Slides into the center
                exit={{x: "-100%", opacity: 0}}   // Slides off-screen to the left
                transition={{duration: 0.3, ease: "easeInOut"}}
            >
                <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault()
                    console.log('form submitted')
                }}>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Email
                            Address</label>
                        <input
                            type="email"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/5 transition-all"
                            placeholder="chef@goldenyolk.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label
                                className="text-xs font-black uppercase tracking-widest text-stone-400">Password</label>
                        </div>
                        <input
                            type="password"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/5 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Button: The "Signature" color */}
                    <button
                        className="w-full bg-[#FFD700] hover:bg-[#FACC15] text-amber-950 font-bold py-4 rounded-xl shadow-lg shadow-yellow-900/10 transition-all transform hover:translate-y-[-1px] active:translate-y-[1px]">
                        Enter Kitchen
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-stone-500 text-sm font-medium">
                        New to the table?
                        <Link to="/register"
                              className="text-amber-800 font-bold ml-2 hover:underline underline-offset-4 decoration-[#FFD700]"
                        >Register here</Link>
                    </p>
                </div>
            </motion.div>
        </>
    )
}

export default LoginPage