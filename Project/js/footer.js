console.log("Работает программа подвала");
const body = document.querySelector('.wrapper');
let footer = 
`<footer class="from_js">
	<div class="copyright">\u00A9 Copyright: Artemii Tsipino</div>
</footer>`
body.insertAdjacentHTML('beforeend', footer);
