const GoldToken = () => {
	return (
		<section className='mb-10 lg:mb-[60px] 2xl:mb-[100px]' id='tokenom'>
			<div className='container'>
				<h2 className='font-roboto font-bold text-[24px] text-[#002c29] mb-2 md:text-center lg:text-[40px] lg:mb-10 2xl:mb-[60px]'>
					Tokenomics GOLD
				</h2>

				<div className='grid gap-y-[10px] lg:grid-cols-2 gap-x-[10px] lg:gap-10'>
					<div className='grid gap-y-[10px] gap-x-[10px] md:grid-cols-2 lg:gap-10'>
						<article className='border border-[#002c29] rounded-[10px] bg-custom-white font-roboto h-max'>
							<header className='border border-[#002c29] rounded-[10px] bg-[#002c29] p-5 font-medium text-[18px] text-custom-white'>
								Quantity NFT
							</header>
							<main className='pb-[6px] px-5 pt-[10px] text-[14px] text-[#002c29] font-normal'>
								2990
							</main>
						</article>

						<article className='border border-[#002c29] rounded-[10px] bg-custom-white font-roboto h-max'>
							<header className='border border-[#002c29] rounded-[10px] bg-[#002c29] p-5 font-medium text-[18px] text-custom-white'>
								Cost 1 NFT
							</header>
							<main className='pb-[6px] px-5 pt-[10px] text-[14px] text-[#002c29] font-normal'>
								$500
							</main>
						</article>
					</div>
					<article className='border border-[#002c29] rounded-[10px] bg-custom-white font-roboto h-max'>
						<header className='border border-[#002c29] rounded-[10px] bg-[#002c29] p-5 font-medium text-[18px] text-custom-white'>
							Total token issue
						</header>
						<main className='pb-[6px] px-5 pt-[10px] text-[14px] text-[#002c29] font-normal'>
							$0.01
						</main>
					</article>

					<article className='border border-[#002c29] rounded-[10px] bg-custom-white font-roboto h-max'>
						<header className='border border-[#002c29] rounded-[10px] bg-[#002c29] p-5 font-medium text-[18px] text-custom-white'>
							Initial token price
						</header>
						<main className='pb-[6px] px-5 pt-[10px] text-[14px] text-[#002c29] font-normal'>
							10 миллиардов
						</main>
					</article>

					<article className='border border-[#002c29] rounded-[10px] bg-custom-white font-roboto h-max  '>
						<header className='border border-[#002c29] rounded-[10px] bg-[#002c29] p-5 font-medium text-[18px] text-custom-white'>
							Annual return of one NFT
						</header>
						<main className='pb-[6px] px-5 pt-[10px] text-[14px] text-[#002c29] font-normal'>
							$100 (20%)
						</main>
					</article>
				</div>
			</div>
		</section>
	);
};

export default GoldToken;
