import React from "react";
import eyeIcon from "../../../assets/icons/eyeicon.svg";
import secondEyeIcon from "../../../assets/icons/secondEyeIcon.svg";
import thirdEyeIcon from "../../../assets/icons/thirdEyeIcon.svg";
import headingImg from "../../../assets/images/game_heading.svg";
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";
import { screens } from "../index";
import s from "./index.module.css";

interface StartScreenPropsI {
	onStart: Function;
}

const StartScreen: React.FunctionComponent<StartScreenPropsI> = ({ onStart }) => {
	return (
		<div className={s.container}>
			<div
				className={s.heading}
				style={{ backgroundImage: `url(${headingImg})` }}
			>
				<h3 className={s.heading_title}>
					Найди число
				</h3>
				<p className={s.heading_description}>
					Тренажёр на внимание
				</p>
			</div>
			<div className={s.content}>
				<div className={s.content_title}>
					Тренирует:
				</div>
				<div className={s.content_list}>
					<ListItem
						title="Произвольное внимание"
						description="Научитесь концентрировать внимание только на важном"
						icon={eyeIcon}
					/>
					<ListItem
						title="Концентрацию и переключение внимания"
						description="Позволит не упускать из виду важные детали"
						icon={secondEyeIcon}
					/>
					<ListItem
						title="Зрительное восприятие"
						description="Сможете быстро находить основные мысли в текстах"
						icon={thirdEyeIcon}
					/>
				</div>
			</div>
			<Button
				text="Далее"
				onClick={() => {
					onStart(screens.gameScreen);
				}}
			/>
		</div>
	);
};

export default StartScreen;