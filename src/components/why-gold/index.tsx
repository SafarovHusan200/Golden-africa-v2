import goldImage from "../../assets/images/gold.png";
import { Map, Oclock, Translatsion } from "../icon";

const WhyGold = () => {
	return (
		<section className='mb-10 lg:mb-[60px] 2xl:mb-[100px]' id='investors'>
			<div className='container'>
				<h2 className='font-roboto font-bold text-[24px] text-[#002c29] mb-2 md:text-center lg:text-[40px] lg:mb-10 2xl:mb-[60px]'>
					Why it's worth investing in GOLD?
				</h2>

				<div className='flex flex-col gap-y-[10px] sm:flex-row'>
					<div className='flex flex-col gap-y-[10px] lg:gap-y-10'>
						<article className='flex gap-x-2 xl:w-[700px] 2xl:w-[800px] items-center rounded-[10px] bg-custom-white py-4 pr-4 pl-5'>
							<span className='w-[42px] h-[42px] text-[#002c29]'>
								<Translatsion />
							</span>

							<p className='text-[14px] text-[#002c29] font-normal'>
								Transparency: online broadcast of the mining process.
							</p>
						</article>

						<article className='flex gap-x-2 items-center rounded-[10px] bg-custom-white py-4 pr-4 pl-5'>
							<span>
								<Map />
							</span>

							<p className='text-[14px] text-[#002c29] font-normal'>
								Partial ownership of a real gold deposit.
							</p>
						</article>

						<article className='flex gap-x-2 items-center rounded-[10px] bg-custom-white py-4 pr-4 pl-5'>
							<span>
								<Oclock />
							</span>

							<p className='text-[14px] text-[#002c29] font-normal'>
								Recurring payments and long-term payback.
							</p>
						</article>
					</div>
					<div className='max-w-[308px] mx-auto'>
						<img src={goldImage} alt='gold image' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyGold;
