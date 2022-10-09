import { useState, useEffect } from 'preact/hooks';

export default function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileDevice);
	}, []);

	return isMobile;
}

function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}
