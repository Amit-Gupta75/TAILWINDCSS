function MainContainer() {
  return (
    <div className="p-8">

      <h4 className="text-2xl font-bold border-b pb-3">
        Most Popular
      </h4>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="/src/assets/images/stew.jpg"
            alt="stew"
            className="h-48 w-full object-cover"
          />

          <div className="p-5 space-y-2">
            <h3 className="font-semibold text-lg">
              5 Bean Chili Stew with Feta Cheese
            </h3>

            <p className="text-gray-500 text-sm">
              Recipe by Mario
            </p>

            <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              25 mins
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="/src/assets/images/noodles.jpg"
            alt="noodles"
            className="h-48 w-full object-cover"
          />

          <div className="p-5 space-y-2">
            <h3 className="font-semibold text-lg">
              Veg Noodles
            </h3>

            <p className="text-gray-500 text-sm">
              Recipe by Mario
            </p>

            <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              20 mins
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="/src/assets/images/curry.jpg"
            alt="curry"
            className="h-48 w-full object-cover"
          />

          <div className="p-5 space-y-2">
            <h3 className="font-semibold text-lg">
              Tofu Curry
            </h3>

            <p className="text-gray-500 text-sm">
              Recipe by Mario
            </p>

            <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              30 mins
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MainContainer
