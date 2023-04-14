

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-2xl font-medium text-gray-800 text-center">
            Trusted by greatest companies
        </h2>
        <div className=" flex flex-col md:flex-row  items-center justify-center gap-20">
            <img src="google.png" alt="img google" className="w-48" />
            <img src="airbnb.png" alt="img google" className="w-48" />
            <img src="amazon.png" alt="img google" className="w-48" />
            <img src="shopify.png" alt="img google" className="w-48" />
            <img src="google.png" alt="img google" className="w-48" />
        </div>
    </div>
  )
}

export default Clients