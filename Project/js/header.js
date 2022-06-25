console.log("Работает программа шапки");
const bodyHTML = document.querySelector('.wrapper');
header = `<header class="from_js shadow">
	<div class="header__logo"><img src="img/logo.png" alt="Logo"></div>
	<div class="header__navigation">
		<ul>
			<li><a href="index.html">Головна</a></li>
			<li><a href="news.html">Новини</a></li>
			<li><a href="about.html">Про нас</a></li>
			<li><a href="contacts.html">Контакти</a></li>
		</ul>
	</div>
</header>`
bodyHTML.insertAdjacentHTML('afterbegin', header);
