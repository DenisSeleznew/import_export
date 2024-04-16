import { getRandomColor } from './utils';

export default function initApp() {
	const buttonColor = document.createElement('button');
	buttonColor.className = 'button';
	buttonColor.textContent = 'Изменить цвет страницы';

	buttonColor.addEventListener('click', event => {
		const isClickButton = event.target;
		if (isClickButton) {
			document.body.style.background = getRandomColor();
		}
	});
	document.body.prepend(buttonColor);
	return buttonColor;
}
