import { RostPrice, SendUSD, Translatsion } from "../icon";

const GoldTariff = () => {
	return (
		<section className='mb-10 lg:mb-[60px] 2xl:mb-[100px]' id='about'>
			<div className='container'>
				<div className='mb-[27px] md:mb-[50px]'>
					<h2 className='font-roboto font-bold text-[24px] text-[#002c29] mb-2 md:text-center lg:text-[40px]'>
						What is GOLD?
					</h2>
					<p className='font-roboto font-normal text-[14px] text-[#888] md:text-[16px] max-w-[640px] md:mx-auto md:text-center'>
						The GOLD project offers investments through the NFT that entitle
						partial ownership of a real gold deposit. Your profit is secured not
						only by digital assets, but also by real gold mining.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-[10px]'>
					<article className='border border-[#002c29] rounded-[10px] bg-custom-white min-w-[220px] h-[120px] py-5 flex items-center justify-center flex-col gap-y-1'>
						<span className='w-[42px] h-[42px] text-[#002c29]'>
							<Translatsion />
						</span>

						<p className='font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							Online broadcast from the field.
						</p>
					</article>

					<article className='border border-[#002c29] rounded-[10px] bg-white min-w-[220px] h-[120px] py-5 flex items-center justify-center flex-col gap-y-1'>
						<span>
							<SendUSD />
						</span>

						<p className='font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							Quarterly NFT payments.
						</p>
					</article>

					<article className='border border-[#002c29] rounded-[10px] bg-white min-w-[220px] h-[120px] py-5 flex items-center justify-center flex-col gap-y-1'>
						<span>
							<RostPrice />
						</span>

						<p className='font-roboto font-normal text-[14px] text-center text-[#0e0e0e]'>
							Long-term investments with rising value of tokens.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default GoldTariff;
