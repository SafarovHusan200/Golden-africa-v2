import { useState } from "react";
import arrow from "../../assets/images/arrow_bottom.svg";
const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAnswer = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className='faq mb-10 bg-custom-background'>
			<div className='container'>
				<div className='w-full mx-auto '>
					<h2 className='text-[#002C29] text-center text-[40px] font-roboto text- font-bold mb-7'>
						FAQ
					</h2>
					<p className='text-custom-gray font-roboto m-auto max-w-[640px] text-center mb-9'>
						By buying an NFT, you become a co-owner of a gold deposit. The
						project uses tokens to manage assets and provides payments based on
						mining revenues.
					</p>
					<div className='space-y-4'>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(0)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Отслеживание рынка золота и цен на золото в Замбии
								</span>

								<img
									className={
										openIndex === 0
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 0 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										Золото имеет огромное культурное и экономическое значение в
										Индии. Его широко покупают для свадеб, фестивалей и в
										качестве инвестиций. Местный спрос, импортные пошлины,
										налоги и курсы обмена валют — все это влияет на колебания
										цен. Текущий курс в Замбии: 3 453,6 KZ/10 г. Текущий курс в
										Индии: 55 950 рупий (17949,00 KZ) Следовательно, вы можете
										видеть, что цена на золото в Индии выше. Сравнение курсов
										золота в Замбии и ОАЭ: ОАЭ имеют сильную привязанность к
										золоту, а Дубай является одним из ведущих мировых центров
										торговли золотом. Цены на золото в ОАЭ зависят от таких
										факторов, как местный спрос, региональные экономические
										условия и динамика мирового рынка золота. Текущий курс в
										Замбии: 3 453,6 KZ/10 г Текущий курс в ОАЭ: 7396,70 AED (3
										453,6 KZ) Следовательно, курс золота в Замбии и ОАЭ более
										схож.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>
									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Исследовать:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Прежде чем инвестировать в золото, тщательно изучите рынок,
										поймите факторы, которые влияют на цены на золото, и будьте
										в курсе последних тенденций и графиков цен на золото. Это
										поможет вам принимать обоснованные инвестиционные решения.
									</p>
									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Варианты инвестиций:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Существуют различные способы инвестирования в золото в
										Замбии, включая покупку физического золота (монет, слитков),
										инвестирование в золотые биржевые фонды (ETF), акции
										золотодобывающих компаний и фьючерсные контракты на золото.
										Оцените свою толерантность к риску и инвестиционные цели,
										чтобы выбрать наиболее подходящий вариант.
									</p>
									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Хранение и безопасность:
									</h3>
									<p className='text-[18px] font-roboto leading-[145%] font-normal text-custom-gray line-he'>
										Если вы решили инвестировать в физическое золото, убедитесь,
										что у вас есть надежное хранилище, например, банковская
										ячейка или надежное хранилище.
									</p>
								</div>
							)}
						</div>

						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(1)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Инвестиции в золото
								</span>

								<img
									className={
										openIndex === 1
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 1 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>

						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(2)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Будущее курса золота
								</span>

								<img
									className={
										openIndex === 2
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 2 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(3)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Цифровая экономика
								</span>

								<img
									className={
										openIndex === 3
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 3 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(4)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Обеспеченные золотом токены
								</span>

								<img
									className={
										openIndex === 4
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 4 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(5)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Места ловушек для сомородков
								</span>

								<img
									className={
										openIndex === 5
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 5 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(6)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Интересные факты
								</span>

								<img
									className={
										openIndex === 6
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 6 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
						<div className='shadow-sm'>
							<button
								onClick={() => toggleAnswer(7)}
								className='w-full flex items-center justify-between text-left py-4 px-6 bg-custom-white rounded-md text-custom-black focus:outline-none'
							>
								<span className='font-semibold text-[#002C29] text-[20px] font-roboto'>
									Статистика по золотому треугольнику
								</span>

								<img
									className={
										openIndex === 7
											? "rotate-180 transform transition-transform"
											: "transform transition-transform"
									}
									src={arrow}
									alt='arrow'
								/>
							</button>
							{openIndex === 7 && (
								<div className='px-6 bg-custom-white pb-4'>
									<p className='text-[18px] font-roboto mb-4 leading-[145%] font-normal text-custom-gray line-he'>
										За прошедшие годы график цен на золото в Замбии претерпел
										значительные колебания. В то время как рецессия 2008 года
										снизила цены, в 2011 году золото достигло исторического
										максимума в Замбийской кваче, превысив ZK 1800 за унцию. В
										настоящее время цена составляет ZK 2268. Цены на золото
										зависят от рыночных циклов и настроений инвесторов. В
										периоды экономической стабильности и бычьих фондовых рынков
										цена на золото в Канаде может снижаться, поскольку инвесторы
										переключают свое внимание на другие инвестиционные
										возможности. Крайне важно изучать исторические тенденции и
										рыночные условия, чтобы принимать обоснованные решения об
										инвестициях в золото.
									</p>
									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Сравнение цен на золото в Замбии и Индии:
									</h3>

									<h3 className='font-roboto mb-2 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										Советы, которые следует знать новичкам перед инвестированием
										в золото в Замбии:
									</h3>

									<h3 className='font-roboto mb-1 text-[18px] text-[#002C29] leading-[145%] font-normal'>
										• Диверсификация:
									</h3>
									<p className='text-[18px] font-roboto mb-2 leading-[145%] font-normal text-custom-gray line-he'>
										Рассматривайте золото как часть диверсифицированного
										инвестиционного портфеля. Оно может выступать в качестве
										хеджа против инфляции и обеспечивать стабильность во время
										экономических спадов.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
