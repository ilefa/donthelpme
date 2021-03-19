setTimeout(() => {
	let help = document.querySelector('#Help--openHelpButton');
    if (!help) {
        return;
    }

    help.remove();
}, 500);