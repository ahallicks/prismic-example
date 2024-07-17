/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

import Button from '@/components/Button';

const Hero = ({ slice }) => {
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
					{['heroWithPreLink', 'heroWithAndPrelink'].includes(
						slice.variation,
					) ? (
						<div className="mb-6">
							<div className="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
								<a
									className="btn-sm group relative py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white"
									href={slice.primary.pre_link.url}
								>
									<span className="relative inline-flex items-center">
										{slice.primary.prelink_text}{' '}
										<span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
											-&gt;
										</span>
									</span>
								</a>
							</div>
						</div>
					) : null}
					<h1 className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
						{slice.primary.title}
					</h1>
					<div className="mb-8 text-lg text-slate-300">
						<PrismicRichText field={slice.primary.text} />
					</div>
					{['heroWithLink', 'heroWithAndPrelink'].includes(
						slice.variation,
					) ? (
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
			{/* <div className="pt-12 pb-24 flex flex-col items-center w-screen bg-greenGrey">
				<div className="container grid grid-cols-1 md:grid-cols-2 text-left min-h-[512px] gap-24 items-center">
					<div className="grid gap-12 items-start">
						<h1>{slice.primary.hero_title}</h1>
						<PrismicRichText field={slice.primary.hero_text} />
						{slice.variation === 'heroWithLink' ? (
							<div className="items-start font-semibold">
								<Button
									link={slice.primary.hero_link}
									label={slice.primary.link_text}
								/>
							</div>
						) : null}
					</div>
					<PrismicNextImage
						field={slice.primary.hero_image}
						className="w-full h-auto rounded-3xl overflow-hidden"
					/>
				</div>
			</div> */}
		</section>
	);
};

export default Hero;
