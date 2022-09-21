import React, { useState } from "react";
import GameService from "../../modules/game";
import GameScreen from "./GameScreen";
import s from "./index.module.css";
import ResultsScreen from "./ResultsScreen";
import StartScreen from "./StartScreen";

export enum screens {
	startScreen,
	gameScreen,
	resultsScreen
}

const gameService = new GameService();

const getActiveScreen = (screenName: screens, setActiveScreen: Function) => {
	switch (screenName) {
		case screens.startScreen:
			return <StartScreen onStart={setActiveScreen}/>;
		case screens.gameScreen:
			return <GameScreen
				onGameEnd={setActiveScreen}
				gameService={gameService}
			/>;
		case screens.resultsScreen:
			return <ResultsScreen
				rightAnswers={gameService.rightAnswers}
				onStart={setActiveScreen}
			/>;
	}
};


const Game = () => {
	const [ activeScreen, setActiveScreen ] = useState<screens>(screens.startScreen);

	return (
		<div className={s.container}>
			{
				getActiveScreen(activeScreen, setActiveScreen)
			}
		</div>
	);
};

export default Game;