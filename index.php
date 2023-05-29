<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Carlito:wght@700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Carlito&family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
	<title>Главная</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
	<?php
		require_once "header.html";
	?>
	<main>
		<div class="slider">
		  <div class="slider-item active">
		    <img src="images/frispers_slide.png" class="slider_img">
		  </div>
		  <div class="slider-item">
		    <img src="images/burningman_slide.png" class="slider_img">
		  </div>
		  <div class="slider-item">
		    <img src="images/gloevik_slide.png" class="slider_img">
		  </div>
		  <div class="slider-item">
		    <img src="images/royalbrows_slide.png" class="slider_img">
		  </div>
		</div>
		<div class="about">
			<div class="about_left">
				<p class="about_header">Приветствую!</p>
				<div class="about_left_info">
					<img src="images/body-bg.gif" alt="" class="info_img">
					<div class="info_descr">Меня зовут Алексей, я - начинающий full-Stack разработчик. Занимаюсь программированием в web development уже больше полугода. За это время я обучился многим технологиям web-разработки, а так же закрепил на практике свои знания, создавая свои собственные web-сайты с использованием различных технологий</div>
				</div>
				<p class="info_text">Нанимая меня на работу, вы можете определить уровень моего опыта основываясь на сложности работ в моём портфолио 
				</p><a href="works.php" class="works_link">Посмотреть работы</a>
			</div>
			<div class="about_right">
				<p class="about_header">Мои навыки:</p>
				<div class="about_right_window">
					<ul class="window_skills">
						<li class="skills_item">HTML5</li>
						<li class="skills_item">CSS3</li>
						<li class="skills_item">JavaScript</li>
						<li class="skills_item">PHP</li>
						<li class="skills_item">MySQL</li>
					</ul>
				</div>
			</div>
		</div>
	</main>
	<hr class="line">
	<footer>
		<?php
			require_once "footer.html";
		?>
	</footer>
	<script src="script/script.js"></script>
</body>
</html>