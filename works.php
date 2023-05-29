<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Carlito:wght@700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&amp;family=Playfair+Display:wght@700&amp;display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans&display=swap" rel="stylesheet">
	<title>Работы</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/works.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
	<?php
		require_once "header.html";
	?>
	<div class="container">
		<div class="works_description">
			<p class="desc_header">Мои проекты</p>
			<p class="desc_text">Здесь вы можете ознакомиться с веб сайтами, которые делал я</p>
		</div>
		<div class="work_block">
			<div class="work_header_block">
				<hr class="hr">
				<p class="work_header">Gloevik</p>
				<hr class="hr">
			</div>
			<img src="images/gloevik_slide" alt="" class="work_img">
			<div class="work_drop_info">
				<h2>Сайт магазина мебели <span class="gloevik">Gloevik</span></h2>
				<p>Написан на чистом <span class="html">HTML</span> и <span class="css">CSS</span>. При вёрстке использовалась блочная модель документа, выравнивания определялись через flex-box технологию. Полная адаптивность сайта достигнута за счёт "резиновой" вёрстки а так же <span class="css">Media Queries</span> - технологией смены css стилей при открытии страницы на устройствах с определённым разрешением</br></br><a href="#" class="watch_link">Посмотреть</a></p>
			</div>
		</div>
		<div class="work_block">
			<div class="work_header_block">
				<hr class="hr">
				<p class="work_header">Frispers</p>
				<hr class="hr">
			</div>
			<img src="images/frispers_slide.png" alt="" class="work_img">
			<div class="work_drop_info">
				<h2>Сайт маркетинговой кампании <span class="frispers">Frispers</span></h2>
				<p>Написан на <span class="html">HTML</span>, <span class="css">CSS</span>, а так же на серверном языке программирования <span class="php">PHP</span>. Адаптивность сайта достигнута благодаря <span class="css">Медиа запросам</span> и отзывчивой вёрстке. <span class="php">PHP</span> использовался для реализации функции логирования и регистрации, а так же для подключения панели навигации по сайту и его футера в целях сокращения кода, общего объёма и скорейшей загрузки страниц</br></br><a href="#" class="watch_link">Посмотреть</a></p>
			</div>
		</div>
		<div class="work_block">
			<div class="work_header_block">
				<hr class="hr">
				<p class="work_header">Burning Man</p>
				<hr class="hr">
			</div>
			<img src="images/burningman_slide.png" alt="" class="work_img">
			<div class="work_drop_info">
				<h2>Сайт ежегодного фестиваля <span class="burningman">BURNING MAN</span></h2>
				<p>Одна из моих первых работ. Написан на чистом <span class="html">HTML</span> и <span class="css">CSS</span>. Вёрстка полностью адаптивна и прекрасно смотрится на устройствах с любым разрешением благодаря <span class="css">CSS Grid</span> и <span class="css">Медиа Запросам</span></br></br><a href="#" class="watch_link">Посмотреть</a></p>
			</div>
		</div>
		<div class="work_block">
			<div class="work_header_block">
				<hr class="hr">
				<p class="work_header">Royal Brows</p>
				<hr class="hr">
			</div>
			<img src="images/royalbrows_slide.png" alt="" class="work_img">
			<div class="work_drop_info">
				<h2>Коммерческий сайт <span class="royalbrows">Royal Brows</span></h2>
				<p>Написан на <span class="html">HTML</span>, <span class="css">CSS</span> и <span class="js">Js</span>. В этом проекте совмещены технологии <span class="css">Flex-Box</span> и <span class="css">CSS Grid</span> для получения высокой растягиваемости страниц. Клиентский язык программирования <span class="js">JavaScript</span> использовался для создания слайдера и ещё некоторых мелочей в целях добавления динамики и большей дружелюбности к пользователю. <span class="royalbrows">Royal Brows</span> написан для команды, учавствовашей в мероприятии <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5_%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8B" class="world_skills">WorldSkills Russia</a></br></br><a href="#" class="watch_link">Посмотреть</a></p>
			</div>
		</div>
	</div>
	<footer>
		<?php
			require_once "footer.html";
		?>
	</footer>
	<script src="script/works.js"></script>
	<script src="script/script.js"></script>
</body>
</html>