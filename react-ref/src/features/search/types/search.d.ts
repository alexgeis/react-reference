type ModalProps = {
	activeItem: TaskItem;
	setActiveItem: (newActiveTask: TaskItem) => void;
	toggle: () => void;
	onSave: (newTask: TaskItem) => void;
};
