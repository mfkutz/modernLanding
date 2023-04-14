
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseFill, RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const Reviews = () => {
    return (
        <div className="p-8 flex flex-col justify-center bg-gray-100">
            <h2 className="text-[40px] text-center font-bold ">
                Let's hear What
            </h2>
            <h2 className="text-[40px] text-center font-bold pb-4 ">
                they says
            </h2>
            <div className="flex justify-center gap-8 ">
                <span className="text-5xl text-primary"><RiDoubleQuotesL /></span>
                <p className="max-w-2xl text-center leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veniam.
                    Veniam iste ullam accusantium facilis necessitatibus molestias quaerat fugit
                    cupiditate officiis? Omnis nihil culpa optio repellendus quibusdam, dolores
                    molestias. Unde.
                </p>
                <span className="text-5xl text-primary"><RiDoubleQuotesR /></span>
            </div>
            <div className="flex flex-col items-center gap-8 ">

                <div className="flex items-center pt-10 gap-14">

                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg"
                        alt="empleado" className="w-12 h-12 object-cover rounded-full  " />
                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg"
                        alt="empleado" className="w-16 h-16 object-cover rounded-full " />
                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg"
                        alt="empleado" className="bg-green-300 w-20 h-20 object-cover rounded-full ring-4 ring-primary p-2" />
                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg"
                        alt="empleado" className="w-16 h-16 object-cover rounded-full " />
                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg"
                        alt="empleado" className="w-12 h-12 object-cover rounded-full " />

                </div>
                <div >
                    <h3 className="text-center text-gray-800 font-bold text-[24px]">
                        Ricky Aprilia
                    </h3>
                    <p className="text-center">
                        Founder of Varibe
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews