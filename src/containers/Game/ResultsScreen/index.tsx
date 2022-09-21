import React from "react";
import Button from "../../../components/Button";
import { screens } from "../index";
import s from "./index.module.css";

interface ResultsScreenI {
	rightAnswers: number;
	onStart: Function;
}

const ResultsScreen: React.FunctionComponent<ResultsScreenI> = ({ rightAnswers, onStart }) => {
	return (
		<div className={s.container}>
			<div className={s.results}>
				Колличество верных ответов: {rightAnswers}
			</div>
			<Button
				text="Попробовать снова"
				onClick={() => {
					onStart(screens.gameScreen);
				}}
			/>
		</div>
	);
};

export default ResultsScreen;