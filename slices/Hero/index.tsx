import type { Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';

import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }: HeroProps) => {
	console.log(slice);
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-4 sm:px-6"
		>
			<div className="pb-16 pt-32 md:pb-32 md:pt-52">
				{/* Hero content */}
				<div className="mx-auto max-w-3xl text-center">
					{slice.variation === 'heroWithPrelink' ||
					slice.variation === 'heroWithLinkAndPrelink' ? (
						<div className="mb-6">
							<div className="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
								<PrismicNextLink
									className="btn-sm group relative py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white"
									field={slice.primary.prelink}
								>
									<span className="relative inline-flex items-center">
										{slice.primary.prelink_text}{' '}
										<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
											-&gt;
										</span>
									</span>
								</PrismicNextLink>
							</div>
						</div>
					) : null}
					<h1 className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
						{slice.primary.title}
					</h1>
					<div className="mb-8 text-lg text-slate-300">
						<PrismicRichText field={slice.primary.text} />
					</div>
					{slice.variation === 'heroWithLink' ||
					slice.variation === 'heroWithLinkAndPrelink' ? (
						<div className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0">
							<Button link={slice.primary.link}>
								{slice.primary.link_text}
								<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
									-&gt;
								</span>
							</Button>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default Hero;
