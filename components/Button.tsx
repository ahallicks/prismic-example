import { LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';

type TButton = {
	link: LinkField;
	children: React.ReactNode;
};

const Button = ({ link, children }: TButton) => {
	return (
		<PrismicNextLink
			field={link}
			className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
		>
			{children}
		</PrismicNextLink>
	);
};

export default Button;
