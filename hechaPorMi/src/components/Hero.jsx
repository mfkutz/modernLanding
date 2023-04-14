
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseFill, RiPlayCircleLine, RiStarSFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8">

      <div className="md:col-span-5 flex items-center justify-center p-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold p-8 leading-[7rem]">Web Design Impactful Digital
            <span className="text-primary pt-1 pb-4 px-6 border-8 border-primary relative">
              Products

              <RiCheckboxBlankCircleFill className="text-white text-lg absolute -left-4 -top-4 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-lg absolute -right-4 -top-4 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-lg absolute -right-4 -bottom-4 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-lg absolute -left-4 -bottom-4 p-2 bg-primary rounded-full box-content" />

            </span>
          </h1>
          <p className="text-gray-500 text-xl leading-10 pl-9 max-w-[80%]">Help find solutions with intitutive and in accordance with client business goals. We provide a high-quality services.</p>
          <div className="flex items-center ">
            <button className="bg-primary text-white ml-9 px-9 py-3 rounded-xl text-xl">
              Contact Us
            </button>
            <button className=" flex text-left items-center gap-1 bg-red ml-9 py-3 rounded-xl text-xl">
              <RiPlayCircleLine className="box-content p-2 text-[4rem] text-primary bg-blue-100 rounded-full" /> Watch our <br />introduction video
            </button>

          </div>
        </div>
      </div>

      <div className="md:col-span-3 flex items-center justify-center relative ">

        <div className="">

          <img src="hero.png" alt="hero" className="w-[480px] h-[480px] object-cover" />
          <RiCheckboxBlankCircleFill className="absolute top-[50%] -translate-y-1/2 left-1/2 
        -translate-x-1/2 text-[350px] p-4 bg-primary  text-blue-100 ring-1 rounded-full -z-10"/>



          <div className="relative -mt-12 rounded-md bg-white shadow-xl p-4 flex justify-center max-w-[260px] mx-auto flex-col gap-2">
            <div className="bg-white flex items-center">
              <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
              alt="empleado" className="bg-white w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 " />
              <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
              alt="empleado" className="bg-white w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4" />
              <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
              alt="empleado" className="bg-white w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4" />
              <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
              alt="empleado" className="bg-white w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4" />
              <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
              alt="empleado" className="bg-white w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4" />
            </div>
            <h2 className="text-xl font-bold text-gray-700">150 + Employees</h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarSFill className="text-primary" />5.0 (3.1k reviews)
            </div>
              <RiCheckboxBlankCircleFill className="absolute text-primary text-8xl -right-12 -bottom-12 -z-10"/>
          </div>

        </div>
      {/* imagenes */}
      <img src="figma.png" alt="figma" className="w-20 h-20 rotate-12 absolute object-cover rounded-full border-l-4 border-gray-700 top-[15%] right-[10%]"/>
      <img src="sketch.png" alt="figma" className="-rotate-12 w-10 h-10 absolute object-cover rounded-full top-[5%] left-[5%]"/>
      <img src="adobe.png" alt="figma" className="-rotate-6 w-16 absolute object-cover rounded-full border-l-4 border-gray-700 top-[18%] left-[10%]"/>

      </div>

    </section>
  )
}

export default Hero