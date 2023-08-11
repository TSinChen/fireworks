import Firework from './Firework';
import './style.scss';

const FIREWORKS = [
	{
		position: {
			top: '100px',
			left: '100px',
		},
		size: {
			width: '100px',
			height: '100px',
		},
		delay: 0,
	},
	{
		position: {
			top: '50px',
			left: '350px',
		},
		size: {
			width: '50px',
			height: '50px',
		},
		delay: 3000,
	},
	{
		position: {
			top: '160px',
			left: '450px',
		},
		size: {
			width: '50px',
			height: '50px',
		},
		delay: 2500,
	},
	{
		position: {
			top: '130px',
			left: '600px',
		},
		size: {
			width: '75px',
			height: '75px',
		},
		delay: 500,
	},
	{
		position: {
			top: '140px',
			left: '250px',
		},
		size: {
			width: '75px',
			height: '75px',
		},
		delay: 1000,
	},
];

function App() {
	return (
		<>
			{FIREWORKS.map(({ position, size, delay }, i) => (
				<Firework key={i} position={position} size={size} delay={delay} />
			))}
		</>
	);
}

export default App;
