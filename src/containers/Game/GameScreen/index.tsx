import React, { useEffect, useState } from "react";
import errorIcon from "../../../assets/icons/errorIcon.png";
import NumberCard from "../../../components/NumberCard";
import GameService from "../../../modules/game/index";
import { screens } from "../index";
import s from "./index.module.css";

interface GameScreenPropsI {
	onGameEnd: Function;
	gameService: GameService;
}

const getRows = (numbersArray: Array<Array<number>>, onClick: Function) => {
	const cardSize = (460 / numbersArray.length) - (5 * (numbersArray.length - 2));
	const rows = [];

	for (let i = 0; i < numbersArray.length; i++) {
		rows.push(<div
			key={i}
			className={s.numbersRow}
		>
			{numbersArray[i].map(number => <NumberCard
				key={number}
				number={number}
				cardSize={cardSize}
				onClick={() => {
					onClick(number);
				}}
			/>)}
		</div>);
	}

	return rows;
};

const GameScreen: React.FunctionComponent<GameScreenPropsI> = ({ onGameEnd, gameService }) => {
	const [ taskNumber, setTaskNumber ] = useState<number>(75);
	const [ numbersArray, setNumbersArray ] = useState<Array<Array<number>>>([]);
	const [ isError, setIsError ] = useState<boolean>(false);
	const [ timer, setTimer ] = useState<number>(60);

	const checkTaskNumber = (number: number) => {
		const isNumberValid = gameService.checkTaskNumber(number);
		setNumbersArray(gameService.greed);
		setIsError(!isNumberValid);
		if (!isNumberValid) {
			setTimeout(() => {
				setIsError(false);
			}, 1000);
		}
	};

	useEffect(() => {
		gameService.startGame();
	}, []);

	useEffect(() => {
		if (!isError) {
			setTaskNumber(gameService.taskNumber);
		}
		setNumbersArray(gameService.greed);
	}, [ isError, numbersArray, taskNumber ]);

	useEffect(() => {
		if (timer !== 0) {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		} else {
			onGameEnd(screens.resultsScreen);
		}
	}, [ timer ]);

	return (
		<div className={s.container}>
			<div className={s.timer}>
				Осталось времени: {timer}
			</div>
			<div className={s.taskNumber}>
				<span className={s.taskNumber_text}>
					Найдите указанное число:
				</span>
				<span className={s.taskNumber_number}>
					{taskNumber}
				</span>
			</div>
			<div className={s.content}>
				{

					isError ?
						<div className={s.error}>
							<img
								src={errorIcon}
								alt="Ответ неверный!"
							/>
						</div>
						:
						<div className={s.numbersContainer}>
							{
								getRows(numbersArray, checkTaskNumber)
							}
						</div>
				}
			</div>
		</div>
	);
};

export default GameScreen;