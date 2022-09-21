import React from "react";
import s from "./index.module.css";

interface ListItemPropsI {
	title: string;
	description: string;
	icon: string;
}

const ListItem: React.FunctionComponent<ListItemPropsI> = ({ title, description, icon }) => {
	return (
		<div className={s.listItem}>
			<div className={s.itemTitle}>
				<img className={s.itemTitleIcon} src={icon} alt={title}/>
				<div className={s.itemTitleText}>
					{title}
				</div>
			</div>
			<div className={s.itemDescription}>
				{description}
			</div>
		</div>
	);
};

export default ListItem;