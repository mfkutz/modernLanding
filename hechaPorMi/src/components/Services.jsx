

import { RiMailLine, RiKeyboardBoxFill, RiHardDriveFill, RiSave2Fill, RiFileCodeFill } from "react-icons/ri";

const Services = () => {
    return (
        <div className="grid grid-col md:grid-cols-2 p-8 xl:p-20 xl:gap-20 gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-[40px] font-bold">
                    How We Can Help You
                </h2>
                <p className="text-[20px] text-gray-500">Follow our newsletter. We will regulary
                    update our latest project and avaiability.
                </p>
                <form action="#" className="w-full">
                    <div className="relative flex items-center">
                        <RiMailLine className="text-2xl absolute top-[50%] -translate-y-[50%] left-2 text-gray-600" />
                        <input type="text" placeholder="Enter you email address" className="bg-gray-100 w-full py-6 pl-10  rounded-xl outline-none pr-36" />
                        <button type="submit" className="absolute text-lg font-semibold py-2 px-6 bg-primary text-white rounded-lg right-2">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
            {/* servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">

                    <RiKeyboardBoxFill className="text-4xl p-2 bg-slate-200 text-primary box-content rounded-xl" />
                    <h3 className="text-[20px] font-bold">
                        UI/UX Design
                    </h3>
                    <p className="text-gray-500">
                        Sometimes features require a short description
                    </p>
                </div>
                <div className="flex flex-col gap-2">

                    <RiHardDriveFill className="text-4xl p-2 bg-slate-200 text-primary box-content rounded-xl" />
                    <h3 className="text-[20px] font-bold">
                        Logo Branding
                    </h3>
                    <p className="text-gray-500">
                        Sometimes features require a short description
                    </p>
                </div>
                <div className="flex flex-col gap-2">

                    <RiSave2Fill className="text-4xl p-2 bg-slate-200 text-primary box-content rounded-xl" />
                    <h3 className="text-[20px] font-bold">
                        App Design
                    </h3>
                    <p className="text-gray-500">
                        Sometimes features require a short description
                    </p>
                </div>
                <div className="flex flex-col gap-2">

                    <RiFileCodeFill className="text-4xl p-2 bg-slate-200 text-primary box-content rounded-xl" />
                    <h3 className="text-[20px] font-bold">
                        Website Design
                    </h3>
                    <p className="text-gray-500">
                        Sometimes features require a short description
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services