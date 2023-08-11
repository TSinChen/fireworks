import { useEffect, useRef } from 'react';

type Props = {
	position: {
		top?: string;
		left?: string;
		bottom?: string;
		right?: string;
	};
	size: {
		width: string;
		height: string;
	};
	delay: number;
};

const Firework = ({ position, size, delay }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setInterval(() => {
			ref.current?.classList.add('firework');
		}, delay);
	}, [ref]);

	return (
		<div
			ref={ref}
			style={{
				...position,
				...size,
				display: 'none',
			}}
		>
			<div className="init-container">
				<img src="/fireworks/起始.png" alt="" className="init" />
			</div>
			<img
				src={`/fireworks/主體${Math.random() > 0.5 ? '1' : '2'}.png`}
				alt=""
				className="spread"
			/>
			<div className="center"></div>
			<img src="/fireworks/覆蓋.png" alt="" className="cover" />
		</div>
	);
};

export default Firework;
