import React from "react";
import s from "./index.module.css";

interface ButtonPropsI {
	text: string;
	onClick?: Function;
}

const Button: React.FunctionComponent<ButtonPropsI> = ({ text, onClick }) => {
	return (
		<button
			className={s.button}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			{text}
		</button>
	);
};

export default Button;