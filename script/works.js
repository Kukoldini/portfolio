var savedTheme = localStorage.getItem('theme');
var container = document.querySelector('.container');
let workBlock = document.querySelector('.work_block');

if (true) {

	var workImgs = document.querySelectorAll('.work_img');
	var DropDescrs = document.querySelectorAll('.work_drop_info');

	for (var i = 0; i < workImgs.length; i++) {

		let showBtn = workImgs[i];
		let dropInfo = DropDescrs[i];

		workImg.addEventListener('click', function() {

			dropInfo.classList.toggle('desc_drop');
			workBlock.style.padding = '0 0 500px 0';

		})
		dropInfo.addEventListener('click', function() {

			dropInfo.classList.toggle('desc_drop');
			workBlock.style.padding = '0';

		})

	}

}
