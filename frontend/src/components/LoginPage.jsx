async function signInWithPasskey() {
    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
            username: "bob",
            email: "bob@gmail",
            password: "bob123",
        })
    });

    if (response.ok) {
        console.log("user logged in with passkey")
        alert("login successful")
        return;
    }
}

const handleRegistration = (e) => {
    e.preventDefault()
    console.log('clicked register!')
}

const handleLogin = () => {
    console.log('clicked login!')
    signInWithPasskey()
}

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9f7f2] overflow-hidden relative font-sans text-stone-900">

            {/* 1. The "Morning Sun" Background Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD700]/15 rounded-full blur-[120px] z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[100px] z-0" />

            {/* 2. The Artisan Eggshell Card */}
            <div className="z-10 w-full max-w-md p-10 rounded-[2.5rem] bg-white shadow-[0_30px_60px_-15px_rgba(120,80,20,0.08)] border border-stone-200/60 mx-4">

                {/* Logo/Icon: The "Garnish" */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-stone-800 tracking-tight">
                        The Golden Yolk
                    </h1>
                    <div className="h-0.5 w-12 bg-[#FFD700] mx-auto mt-3 rounded-full" />
                </div>

                <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin()
                }}>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-stone-400 ml-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/5 transition-all"
                            placeholder="chef@goldenyolk.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-xs font-black uppercase tracking-widest text-stone-400">Password</label>
                        </div>
                        <input
                            type="password"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/5 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Button: The "Signature" color */}
                    <button className="w-full bg-[#FFD700] hover:bg-[#FACC15] text-amber-950 font-bold py-4 rounded-xl shadow-lg shadow-yellow-900/10 transition-all transform hover:translate-y-[-1px] active:translate-y-[1px]">
                        Enter Kitchen
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-stone-500 text-sm font-medium">
                        New to the table?
                        <a href="/register"
                            className="text-amber-800 font-bold ml-2 hover:underline underline-offset-4 decoration-[#FFD700]"
                            onClick={handleRegistration}>
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;