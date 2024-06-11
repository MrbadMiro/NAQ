import React from "react";
import hero from "../../assets/hero.png";

const Home = () => {
	return (
		<div className="w-full h-full mt-[100px] flex " id="home">
			<div className="grid lg:grid-cols-2  relative gap-5">
				{/* left side content*/}
				<div className="order-2 px-2 lg:px-0 md:order-1 lg:pl-10 py-5 flex flex-col justify-center items-justify mt-4">
					<p className="text-2xl font-bold font-Lora  md:text-[60px] leading-8 lg:leading-10 text-center text-slate-500 ">
						Unleash Your Inner Queen with <span className=" md:text-[60px]  my-2 text-center font-Lora font-extrabold text-pink-700 ">
						Nithiya's Active Queens.
					</span>
					</p>

					

					<p className="mt-4 mb-4 mx-3   text-[12px] lg:text-[16px]  text-justify">
						From Mastering Makeup Artistry and Cake Decorating to Honing Your
						Skills in Tailoring and Aari Embroidery, We Offer a Diverse Range of
						Courses to Unlock Your Inner Queen.
					</p>
				</div>
				<div className=" order-1 md:order-2 pr-0 h-full w-full flex items-center justify-center  ">
					<div className="flex ">
						<img
							src={hero}
							alt=""
							className=" h-full lg:h-[500px]   object-cover w-[100%]      pb-0 pr-0"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
