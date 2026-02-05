function Header() {
    return (
        <header className="mb-10">

            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Recipes
            </h2>

            <div className="flex items-center justify-end gap-3 mt-2">
                <span className="h-1 w-10 bg-indigo-500 rounded-full"></span>

                <h3 className="text-xl md:text-2xl font-medium text-gray-500 tracking-wide">
                    For Ninjas
                </h3>
                {/* Buttons */}
                <div className="mt-auto p-6 flex justify-end gap-3">
                    <button className="px-4 py-2 border border-indigo-500 
text-indigo-500 rounded-lg hover:bg-indigo-500 
hover:text-white transition">
                        Log in
                    </button>
                    <button className="px-4 py-2 bg-indigo-500 text-white 
rounded-lg hover:bg-indigo-600 transition">
                        Sign up
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header
