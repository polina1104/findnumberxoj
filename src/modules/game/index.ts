const getRow = (rowSize: number, numberLength: number): Array<number> => {
	const row: Array<number> = [];

	for (let i = 0; i < rowSize; i++) {
		let randomNumber = Math.floor(Math.random() * Math.pow(10, numberLength));

		if (!row.includes(randomNumber)) {
			row.push(randomNumber);
		} else {
			randomNumber = Math.floor(Math.random() * Math.pow(10, numberLength));
			row.push(randomNumber);
		}
	}

	return row;
};

const getGameGreed = (greedSize: number, numberLength: number): Array<Array<number>> => {
	const greed = [];

	for (let i = 0; i < greedSize; i++) {
		let row = getRow(greedSize, numberLength);

		greed.push(row);
	}

	return greed;
};

class Game {
	private _greed: Array<Array<number>> = [];
	private _taskNumber: number = NaN;
	private currentLevel = 1;
	private currentSecond = 0;
	private isGameActive = false;
	private _rightAnswers = 0;

	get greed(): Array<Array<number>> {
		return this._greed;
	}

	get taskNumber(): number {
		return this._taskNumber;
	}

	get rightAnswers(): number {
		return this._rightAnswers;
	}

	public startGame() {
		this._greed = getGameGreed(3, 2);
		this._taskNumber = this.generateTaskNumber();
		this.currentLevel = 1;
		this.currentSecond = 0;
		this._rightAnswers = 0;
		this.isGameActive = true;
		this.startTimer();
	}

	private startTimer() {
		const interval = setInterval(() => {
			if (this.currentSecond === 60) {
				this.isGameActive = false;
				clearInterval(interval);
			} else {
				this.currentSecond++;
			}
		}, 1000);
	}

	private generateTaskNumber(): number {
		const rowNumber = Math.floor(Math.random() * this._greed.length);
		const columnNumber = Math.floor(Math.random() * this._greed.length);

		return this._greed[rowNumber][columnNumber];
	}

	private generateGreedByLevel() {
		switch (this.currentLevel) {
			case 1:
			case 2:
				return getGameGreed(3, 2);
			case 3:
				return getGameGreed(3, 3);
			case 4:
				return getGameGreed(4, 3);
			case 5:
			case 6:
				return getGameGreed(5, 3);
			default:
				return getGameGreed(5, 4);
		}
	}

	public checkTaskNumber(number: number): boolean | undefined {
		if (this.isGameActive) {
			const prevTaskNumber = this._taskNumber;
			const isAnswerRight = prevTaskNumber === number;

			this._greed = this.generateGreedByLevel();
			this._taskNumber = this.generateTaskNumber();

			if (isAnswerRight) {
				this._rightAnswers++;
				this.currentLevel++;
			}

			return isAnswerRight;
		}
	}
}

export default Game;