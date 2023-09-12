let workBlock = document.querySelectorAll('.work_block');
let dropInfo = document.querySelectorAll('.work_drop_info');
let showButton = document.querySelectorAll('.show-btn');
let showArrow = document.querySelectorAll('.show-arrow');
let showButtonText = document.querySelectorAll('#show-btn');


for (var i = 0; i < dropInfo.length; i++) {

	let currentButton = showButton[i];
	let currentDropInfo = dropInfo[i];
	let currentWorkBlock = workBlock[i];
	let currentShowArrow = showArrow[i];
	let currentShowButtonText = showButtonText[i];


	currentButton.addEventListener('click', function() {
			
		currentDropInfo.classList.toggle('desc_drop');
		currentShowArrow.classList.toggle('minimize');
		if (currentDropInfo.classList.contains('desc_drop')) {
		
			currentWorkBlock.style.padding = '0 0 320px 0';
			currentShowButtonText.style.margin = '17px 0 0 0';
			currentShowButtonText.textContent = 'свернуть';

		} else {

			currentWorkBlock.style.padding = '0 0 110px 0';
			currentShowButtonText.style.margin = '0';
			currentShowButtonText.textContent = 'развернуть';

		}


	})

}


