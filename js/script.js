document.addEventListener('DOMContentLoaded', function () {
	// Mobile menu
	const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
	const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

	toggleButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
	});

	// Video modal
	const modal = document.getElementById('videoModal');
	const videoButton = document.querySelector('.preview__video-button');
	const closeButton = document.querySelector('.modal__close-button');
	const videoPlayer = document.getElementById('videoPlayer');

	videoButton.addEventListener('click', function () {
		modal.style.display = 'block';

		// replace src attribute with video url
		videoPlayer.src =
			'https://www.youtube.com/embed/RIXZkajHTQs?si=-0YbRR84DN1ehl3O';
	});

	// close modal on close button click
	closeButton.addEventListener('click', function () {
		modal.style.display = 'none';
		videoPlayer.src = '';
	});

	// close modal on outer click
	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
			videoPlayer.src = '';
		}
	});
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
	const navbar = document.querySelector('.navbar');

	if (this.window.scrollY > 0) {
		navbar.classList.add('navbar--scroll');
	} else {
		navbar.classList.remove('navbar--scroll');
	}
});
