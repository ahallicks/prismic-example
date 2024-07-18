import type { ReadonlyURLSearchParams } from 'next/navigation';

import {
	SliceSimulator,
	getSlices,
} from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices';

type TParams = {
	searchParams: ReadonlyURLSearchParams & {
		state: string;
	};
};

export default function SliceSimulatorPage({ searchParams }: TParams) {
	const slices = getSlices(searchParams.state);

	return (
		<SliceSimulator background="#0f172a">
			<SliceZone slices={slices} components={components} />
		</SliceSimulator>
	);
}
