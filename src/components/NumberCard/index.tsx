import React, { useState } from "react";
import s from "./index.module.css";

interface NumberCardPropsI {
	number: number;
	cardSize: number;
	onClick?: Function;
}

const getRandomAnimation = () => {
	const animations = [ "pulse", "rotate", "flicker", "none" ];

	return animations[Math.floor(Math.random() * animations.length)];
};

const NumberCard: React.FunctionComponent<NumberCardPropsI> = ({ number, cardSize, onClick }) => {
	const [ randomAnimation ] = useState(getRandomAnimation());
	const [ color ] = useState(Math.floor(Math.random() * 16777215).toString(16));

	return (
		<div
			className={
				// @ts-ignore
				`${s.container} ${s[randomAnimation]}`
			}
			style={{
				width: cardSize,
				height: cardSize / 2,
				fontSize: cardSize / 4,
				backgroundColor: `#${color}`,
			}}

			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			<div>
				{number}
			</div>
		</div>
	);
};

export default NumberCard;