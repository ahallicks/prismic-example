import type { Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';

import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import Button from '@/components/Button';

export type SplitImageTextProps =
	SliceComponentProps<Content.SplitImageTextSlice>;

const backgroundColor = {
	Grey: 'bg-grey',
	Green: 'bg-greenGrey',
};

/**
 * @typedef {import("@prismicio/client").Content.SplitImageTextSlice} SplitImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SplitImageTextSlice>} SplitImageTextProps
 * @param {SplitImageTextProps}
 */
const SplitImageText = ({ slice }: SplitImageTextProps) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="mx-auto max-w-6xl px-4 sm:px-6"
		>
			<div
				className={`${slice.variation === 'heroSection' ? 'pt-12 pb-24' : ''} flex justify-center items-center ${slice.variation === 'heroSection' ? (slice.primary.background_colour ? backgroundColor[slice.primary.background_colour] : backgroundColor.Grey) : ''}`}
			>
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
					<div className="flex flex-col gap-4 items-start">
						{slice.variation === 'heroSection' ? (
							<>
								<PrismicRichText
									field={slice.primary.title}
									components={{
										heading1: ({ children }) => (
											<h1 className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
												{children}
											</h1>
										),
									}}
								/>
								<PrismicRichText
									field={slice.primary.paragraph}
									components={{
										paragraph: ({ children }) => (
											<p className="text-lg text-slate-400 mb-2">
												{children}
											</p>
										),
									}}
								/>
							</>
						) : (
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
						)}
						{slice.variation === 'splitButtonLeft' ||
						slice.variation === 'splitButtonRight' ||
						slice.variation === 'heroSection' ? (
							<Button link={slice.primary.button_link}>
								{slice.primary.button_label}
							</Button>
						) : null}
					</div>
					<PrismicNextImage
						field={slice.primary.image}
						className={`w-full h-auto rounded-3xl ${['default', 'splitButtonRight'].includes(slice.variation) ? 'md:order-first' : 'md:order-last'}`.trim()}
					/>
				</div>
			</div>
		</section>
	);
};

export default SplitImageText;
