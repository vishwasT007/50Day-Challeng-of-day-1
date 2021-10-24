const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClassPanel();
		panel.classList.add('active');
	});
});

const removeActiveClassPanel = () => {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
};
