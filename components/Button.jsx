import { PrismicNextLink } from '@prismicio/next';

const Button = ({ link, children }) => {
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
