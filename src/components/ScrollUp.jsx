import { useEffect } from "react";

function ScrollUp() {
	const onScroll = () => {
		const scrollBtn = document.querySelector(".scroll_up");
		if (scrollBtn) {
			if (window.scrollY >= 500) {
				scrollBtn.style.opacity = "1";
			} else {
				scrollBtn.style.opacity = "0";
			}
		}
	};

	let ticking = false;

	const handleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				onScroll();
				ticking = false;
			});
			ticking = true;
		}
	};

	// Add scroll listener on mount and clean up on unmount
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll); // Clean up the listener
		};
	}, []);

	return (
		<a href='#home' className='scroll_up'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
			>
				<path d='M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z'></path>
			</svg>
		</a>
	);
}

export default ScrollUp;
