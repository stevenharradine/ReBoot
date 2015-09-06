var menu = 0;

function toggle_menu () {
	if (menu) {
		raise_menu();
	} else {
		drop_menu();
	}
}

function drop_menu () {
	document.getElementById ("menu").style.display = "block";
	menu = 1;
}

function raise_menu () {
	document.getElementById ("menu").style.display = "none";
	menu = 0;
}