// import line from "../../assets/images/vecton1.png"
// import line2 from "../../assets/images/vecton2.png"
import arrow from "../../assets/images/dowloand.svg";

import { BgLineOne, BgLineThree, BgLineTwo } from "../icon";

const WorkSystem = () => {
	return (
		<section className='mb-10 lg:mb-[60px] 2xl:mb-[100px]' id='work'>
			<div className='container'>
				<div className='mb-[27px] md:mb-[50px]'>
					<h2 className='font-roboto font-bold text-[24px] text-[#002c29] mb-2 md:text-center lg:text-[40px]'>
						Mechanism of operation
					</h2>
					<p className='font-roboto font-normal text-[14px] text-[#888] md:text-[16px] max-w-[640px] md:mx-auto md:text-center'>
						By buying an NFT, you become a co-owner of a gold deposit. The
						project uses tokens to manage assets and provides payments based on
						mining revenues.
					</p>
				</div>

				<div className='flex flex-col gap-y-[10px] lg:gap-y-[63px] relative'>
					<div className='flex flex-col lg:w-full lg:gap-x-10 xl:w-[70%] xl:flex-wrap gap-y-[10px] lg:flex-row justify-between lg:self-end'>
						<span className='hidden xl:block absolute xl:left-[9%] 2xl:left-[12%]'>
							<BgLineOne />
						</span>
						<article className='w-full lg:w-1/2 xl:w-max flex items-center lg:justify-center px-[30px] border xl:text-[20px] border-[#f0b345] h-[58px] bg-custom-white rounded-[10px] font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							You become a co-owner of a gold <br /> deposit
						</article>
						<span className='hidden xl:block absolute xl:left-[46%] 2xl:left-[44%]'>
							<BgLineTwo />
						</span>
						<article className='w-full lg:w-1/2 xl:w-max flex items-center lg:justify-center px-[30px] border xl:text-[20px] text-left border-[#f0b345] h-[58px] bg-custom-white rounded-[10px] font-roboto font-normal text-[14px] lg:text-center text-[#0e0e0e]'>
							You receive payments
						</article>
					</div>

					<div className='flex flex-col lg:full xl:w-[70%] lg:gap-x-10 xl:flex-wrap gap-y-[10px] lg:flex-row justify-between'>
						<article className='w-full lg:w-1/2 xl:w-max flex items-center lg:justify-center px-[30px] border xl:text-[20px] border-[#f0b345] h-[58px] bg-custom-white rounded-[10px] font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							You buy NFT
						</article>
						<article className='w-full lg:w-1/2 xl:w-max flex items-center lg:justify-center px-[30px] border xl:text-[20px] border-[#f0b345] h-[58px] bg-custom-white rounded-[10px] font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							Project uses tokens
						</article>
						<span className='hidden xl:block absolute xl:right-[11%] 2xl:right-[13%] bottom-[20px]'>
							<BgLineThree />
						</span>
					</div>
				</div>
				<button className='flex items-center justify-between text-left py-4 px-6 bg-custom-gradient mt-24 gap-3 mx-auto rounded-md text-custom-black focus:outline-none'>
					<img src={arrow} alt='arrow' />

					<span className='font-medium text-[#002C29] text-[16px] font-roboto'>
						Download instructions
					</span>
				</button>
			</div>
		</section>
	);
};

export default WorkSystem;
