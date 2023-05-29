
if (window.innerWidth >= 440) {
	var workImgs = document.querySelectorAll('.work_img');
	var DropDescrs = document.querySelectorAll('.work_drop_info');

	for (var i = 0; i < workImgs.length; i++) {
		let workImg = workImgs[i];
		let dropInfo = DropDescrs[i];

		workImg.addEventListener('click', function() {
			workImg.classList.remove('img_return');
			dropInfo.classList.add('desc_drop');
			workImg.classList.add('img_drop');
		})
		dropInfo.addEventListener('click', function() {
			dropInfo.classList.remove('desc_drop');
			workImg.classList.remove('img_drop');
			workImg.classList.add('img_return');
		})

	}
}