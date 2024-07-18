import Button from '@/components/Button.jsx';
import type { Content } from '@prismicio/client';
import { PrismicRichText, type SliceComponentProps } from '@prismicio/react';

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }: TestimonialsProps) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="mx-auto max-w-6xl px-4 sm:px-6"
		>
			<div className="pt-12 md:pt-20">
				{/* Section header */}
				<div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
					<h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
						{slice.primary.title}
					</h2>
					<PrismicRichText
						field={slice.primary.text}
						components={{
							paragraph: ({ children }) => (
								<p className="text-lg text-slate-400">
									{children}
								</p>
							),
						}}
					/>
				</div>

				{/* Carousel built with Swiper.js [https://swiperjs.com/] */}
				{/* * Custom styles in src/css/additional-styles/theme.scss */}
				<div className="relative before:absolute before:inset-0 before:z-20 before:-translate-x-full before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:z-20 after:translate-x-full after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
					<div className="stellar-carousel swiper-container group flex flex-col md:flex-row gap-4 md:gap-8">
						{/* Carousel items */}
						{slice.primary.testimonial.map((item, index) => (
							<article className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
								{/* Radial gradient */}
								<div
									className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
									aria-hidden="true"
								>
									<div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-purple-500" />
								</div>
								<div className="flex h-full flex-col p-6">
									<div className="grow">
										<h3 className="mb-1 text-lg font-bold text-white">
											{item.title}
										</h3>
										<PrismicRichText
											field={item.text}
											components={{
												paragraph: ({ children }) => (
													<p className="mb-3 text-slate-400">
														{children}
													</p>
												),
											}}
										/>
									</div>
									<p className="text-right">
										<span className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white">
											{item.author}
											<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
												-&gt;
											</span>
										</span>
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
