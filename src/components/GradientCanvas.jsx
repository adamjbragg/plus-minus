//

/* eslint-disable no-plusplus */
import { useEffect, useRef } from 'react';

export default function GradientCanvas() {
	const canvasRef = useRef(null);
	const speed = 0.015;
	const colour1 = 0;
	const colour2 = 175;

	const color = function (context, { x, y, r, g, b }) {
		context.fillStyle = `rgb(${r}, ${g}, ${b})`;
		context.fillRect(x, y, 1, 1);
	};

	const red = function (x, y, time) {
		return Math.floor(
			colour1 + colour2 * Math.sin((x * x - y * y) / 5000 + time)
		);
	};

	const green = function (x, y, time) {
		return Math.floor(
			colour1 +
				colour2 *
					Math.sin(
						(x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
					)
		);
	};

	const blue = function (x, y, time) {
		return Math.floor(
			colour1 +
				colour2 *
					Math.sin(
						5 * Math.sin(time / 9) +
							((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
					)
		);
	};

	useEffect(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			const context = canvas.getContext('2d');

			let time = 0;

			const loop = function () {
				for (let x = 0; x <= 32; x++) {
					for (let y = 0; y <= 32; y++) {
						color(context, {
							x,
							y,
							r: red(x, y, time),
							g: green(x, y, time),
							b: blue(x, y, time),
						});
					}
				}

				time += speed;

				window.requestAnimationFrame(loop);
			};

			loop();
		}
	}, []);

	return (
		<canvas
			className="w-full h-full absolute"
			ref={canvasRef}
			width="32px"
			height="32px"
		/>
	);
}
