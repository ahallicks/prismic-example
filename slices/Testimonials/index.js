/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="mx-auto max-w-6xl px-4 sm:px-6"
		>
			<div className="pt-12 md:pt-20">
				{/* Section header */}
				<div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
					{['testimonialsWithPretitle'].includes(slice.variation) ? (
						<div className="inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 font-medium text-transparent">
							{slice.primary.pretitle}
						</div>
					) : null}
					<h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
						{slice.primary.title}
					</h2>
					<p className="text-lg text-slate-400">
						{slice.primary.subtitle}
					</p>
				</div>

				{/* Carousel built with Swiper.js [https://swiperjs.com/] */}
				{/* * Custom styles in src/css/additional-styles/theme.scss */}
				<div className="relative before:absolute before:inset-0 before:z-20 before:-translate-x-full before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:z-20 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
					<div className="stellar-carousel swiper-container group">
						<Highlighter
							className="swiper-wrapper w-fit"
							refresh={swiperInitialized}
						>
							{/* Carousel items */}
							{carouselItems &&
								carouselItems.map((item, index) => (
									<HighlighterItem
										className="swiper-slide group/slide h-auto"
										key={`caoursel-item-${item.title}-${index}`}
									>
										<article className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
											{/* Particles animation */}
											<Particles
												className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
												quantity={3}
												refresh={swiperInitialized}
											/>
											{/* Radial gradient */}
											<div
												className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
												aria-hidden="true"
											>
												<div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-purple-500" />
											</div>
											<div className="flex h-full flex-col p-6">
												<span
													className="mb-3 block"
													dangerouslySetInnerHTML={{
														__html: item.icon,
													}}
												/>
												<div className="grow">
													<h3 className="mb-1 text-lg font-bold">
														{item.title}
													</h3>
													<p className="mb-3 text-slate-400">
														{item.text}
													</p>
												</div>
												{item.link ? (
													<p className="text-right">
														<Link
															className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
															to={item.link.href}
														>
															{item.link.title}
															<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
																-&gt;
															</span>
														</Link>
													</p>
												) : null}
											</div>
										</article>
									</HighlighterItem>
								))}
						</Highlighter>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
