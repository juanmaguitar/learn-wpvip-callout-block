const ToolbarDropdownMenuMock = ({ controls }) => (
	<div data-testid="toolbar-dropdown">
		{controls.map(({ title, onClick }) => (
			<button key={title} data-testid={`control-${title}`} onClick={onClick}>
				{title}
			</button>
		))}
	</div>
);

module.exports = {
	ToolbarDropdownMenu: ToolbarDropdownMenuMock,
};
