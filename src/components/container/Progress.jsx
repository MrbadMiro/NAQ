import React from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { BsCake } from "react-icons/bs";
const Progress = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full py-4 ">
            <div className="py-20  grid md:grid-cols-4 grid-cols-2 items-center justify-center text-pink-700 text-4xl sm:text-7xl md:gap-20 gap-10 md:px-12 px-6">
                <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] rounded-full bg-neutral-100 flex items-center justify-center">
                    <div className="w-inherit h-auto">
                        <FaPaintBrush className="w-full" />
                        <p className="text-[11px] xs:text-sm mt-2 font-semibold w-full">Makeup & Hair</p>
                    </div>
                </div>
                <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] rounded-full bg-neutral-100 flex items-center justify-center">
                    <div className="w-inherit h-auto">
                        <GiAmpleDress className="w-full" />
                        <p className="text-[11px] xs:text-sm mt-2 font-semibold w-full">Aari & Tailoring</p>
                    </div>
                </div>
                <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] rounded-full bg-neutral-100 flex items-center justify-center">
                    <div className="w-inherit h-auto">
                        <BsCake  className="w-full" />
                        <p className="text-[9px] xs:text-sm mt-2 text-center font-semibold">Baking</p>
                    </div>
                </div>
                <div className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] rounded-full bg-neutral-100 flex items-center justify-center">
                    <div className="w-inherit h-auto">
                        <IoFitnessOutline  className="mx-auto" />
                        <p className="text-[11px] xs:text-sm font-semibold text-center">    Fitness</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;
