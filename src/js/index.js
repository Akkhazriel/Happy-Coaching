import aduptiveMenu from "./modules/menu-button";
function cb() {
    let val = document.querySelector('input[name="star"]:checked').value
    
    switch(val) {
		case '1':
			text = arr[0];
			break;
		case '2':
			text = arr[1];
			break;
		case '3':
			text = arr[2];
			break;
		case '4':
			text = arr[3];
			break;
		case '5':
			text = arr[4];
			break;
    }
};

document.forms[0].addEventListener('change', cb);