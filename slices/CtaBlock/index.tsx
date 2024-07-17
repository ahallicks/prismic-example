import type { Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';

import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

export type CtaProps = SliceComponentProps<Content.CtaBlockSlice>;

/**
 * @typedef {import("@prismicio/client").Content.CtaBlockSlice} CtaBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaBlockSlice>} CtaBlockProps
 * @param {CtaBlockProps}
 */
const CtaBlock = ({ slice }: CtaProps) => {
	console.log(slice);
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="relative overflow-hidden rounded-[3rem] px-8 py-12 md:py-20">
					{/* Radial gradient */}
					<div
						className="pointer-events-none absolute left-1/2 top-0 -z-10 flex aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
						aria-hidden="true"
					>
						<div className="translate-z-0 absolute inset-0 rounded-full bg-purple-500 opacity-70 blur-[120px]" />
						<div className="translate-z-0 absolute h-1/4 w-1/4 rounded-full bg-purple-400 blur-[40px]" />
					</div>
					{/* Blurred shape */}
					<div
						className="pointer-events-none absolute bottom-0 left-0 -z-10 translate-y-1/2 opacity-50 blur-2xl"
						aria-hidden="true"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="434"
							height="427"
						>
							<defs>
								<linearGradient
									id="bs5-a"
									x1="19.609%"
									x2="50%"
									y1="14.544%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#A855F7" />
									<stop
										offset="100%"
										stopColor="#6366F1"
										stopOpacity="0"
									/>
								</linearGradient>
							</defs>
							<path
								fill="url(#bs5-a)"
								fillRule="evenodd"
								d="m0 0 461 369-284 58z"
								transform="matrix(1 0 0 -1 0 427)"
							/>
						</svg>
					</div>
					{/* Content */}
					<div className="mx-auto max-w-3xl text-center">
						{slice.variation === 'ctaBlockWithPretitle' ? (
							<div className="inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 font-medium text-transparent">
								{slice.primary.pretitle}
							</div>
						) : null}
						<h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
							{slice.primary.title}
						</h2>
						<PrismicRichText
							field={slice.primary.text}
							components={{
								paragraph: ({ children }) => (
									<p className="mb-8 text-lg text-slate-400">
										{children}
									</p>
								),
							}}
						/>
						<ul className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
							{slice.primary.cta.map((cta, index) => (
								<li
									key={`cta-block-item-${cta.cta_title}`}
									className="relative h-full overflow-hidden rounded-3xl bg-slate-800 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-purple-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100 swiper-slide group/slide h-auto swiper-slide-active"
								>
									<article className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
										<div
											className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
											aria-hidden="true"
											data-testid="particles-container"
										>
											<canvas
												width="350"
												height="231"
												style={{
													width: '350px',
													height: '231px',
												}}
											></canvas>
										</div>
										<div
											className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
											aria-hidden="true"
										>
											<div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-purple-500"></div>
										</div>
										<div className="flex h-full flex-col p-6">
											<div className="grow">
												<h3 className="mb-3 text-lg font-bold text-white">
													{cta.cta_title}
												</h3>
												<PrismicRichText
													field={cta.cta_text}
													components={{
														listItem: ({
															children,
														}) => (
															<li className="mb-3 text-slate-400">
																{children}
															</li>
														),
														paragraph: ({
															children,
														}) => (
															<p className="mb-3 text-slate-400">
																{children}
															</p>
														),
													}}
												/>
											</div>
											<p className="text-right">
												<PrismicNextLink
													className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
													field={cta.cta_link}
												>
													{cta.cta_link_text}
													<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
														-&gt;
													</span>
												</PrismicNextLink>
											</p>
										</div>
									</article>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaBlock;
