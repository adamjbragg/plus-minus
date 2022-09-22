import { useEffect, useRef } from 'react';

export default function Background() {
	const canvasRef = useRef(null);

	const SPEED = 0.02;

	const C1 = 0;
	const C2 = 150;

	const color = function (context, { x, y, r, g, b }) {
		context.fillStyle = `rgb(${r}, ${g}, ${b})`;
		context.fillRect(x, y, 1, 1);
	};

	const R = function (x, y, time) {
		return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
	};

	const G = function (x, y, time) {
		return Math.floor(
			C1 +
				C2 *
					Math.sin(
						(x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
					)
		);
	};

	const B = function (x, y, time) {
		return Math.floor(
			C1 +
				C2 *
					Math.sin(
						5 * Math.sin(time / 9) +
							((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
					)
		);
	};

	useEffect(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			const ctx = canvas.getContext('2d');

			let time = 0;

			const loop = function () {
				for (let x = 0; x <= 32; x++) {
					for (let y = 0; y <= 32; y++) {
						color(ctx, {
							x,
							y,
							r: R(x, y, time),
							g: G(x, y, time),
							b: B(x, y, time),
						});
					}
				}

				time += SPEED;

				window.requestAnimationFrame(loop);
			};

			loop();
		}
	}, []);

	return (
		<canvas
			className="w-full h-full absolute opacity-10"
			ref={canvasRef}
			width="32px"
			height="32px"
		/>
	);
}
