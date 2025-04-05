export const ToolbarDropdownMenu = ({ children, text, icon, controls }) => (
	<div data-testid="toolbar-dropdown">
		<div data-testid="toolbar-text">{text}</div>
		{icon && <div data-testid="toolbar-icon">{icon}</div>}
		<div data-testid="toolbar-controls">
			{controls.map((control, index) => (
				<button
					key={index}
					onClick={control.onClick}
					data-testid={`control-${control.title}`}
				>
					{control.title}
				</button>
			))}
		</div>
	</div>
);
