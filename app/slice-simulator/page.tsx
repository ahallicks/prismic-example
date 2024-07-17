import {
	SliceSimulator,
	getSlices,
} from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices';

export default function SliceSimulatorPage({ searchParams }) {
	const slices = getSlices(searchParams.state);

	return (
		<SliceSimulator background="#0f172a" color="#f1f5f9">
			<SliceZone slices={slices} components={components} />
		</SliceSimulator>
	);
}
