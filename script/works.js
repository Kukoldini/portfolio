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
		
			currentWorkBlock.classList.toggle('padding-offset');
			currentShowButtonText.style.margin = '17px 0 0 0';
			currentShowButtonText.textContent = 'свернуть';

		} else {

			currentWorkBlock.classList.toggle('padding-offset');
			currentShowButtonText.style.margin = '0';
			currentShowButtonText.textContent = 'развернуть';

		}


	})

}


