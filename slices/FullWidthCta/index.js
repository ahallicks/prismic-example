import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.FullWidthCtaSlice} FullWidthCtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FullWidthCtaSlice>} FullWidthCtaProps
 * @param {FullWidthCtaProps}
 */
const FullWidthCta = ({ slice }) => {
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
					<div className="mx-auto max-w-3xl text-center pb-6">
						{['withPretitle', 'withPreAndPostTitle'].includes(
							slice.variation,
						) ? (
							<div className="inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 font-medium text-transparent">
								{slice.primary.pretitle}
							</div>
						) : null}
						<h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-3 text-transparent">
							{slice.primary.title}
						</h2>
						{['postTitle', 'withPreAndPostTitle'].includes(
							slice.variation,
						) ? (
							<h3 className=" h3 inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text py-3 font-medium text-transparent">
								{slice.primary.post_title}
							</h3>
						) : null}
						<PrismicRichText
							field={slice.primary.text}
							components={{
								paragraph: ({ children }) => (
									<p className="text-lg text-slate-400 mb-2">
										{children}
									</p>
								),
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullWidthCta;
