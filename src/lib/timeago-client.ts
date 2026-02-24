declare global {
	interface Window {
		__timeAgoTimer?: number;
		__timeAgoVisibilityHandler?: () => void;
	}
}

export function setupTimeAgo(selector = ".time-ago", interval = 60000) {
	if (typeof window === "undefined" || typeof document === "undefined") return;

	// 去重：已有计时器则清除
	if (window.__timeAgoTimer) {
		clearInterval(window.__timeAgoTimer);
	}

	const update = async () => {
		const { timeAgo } = await import("@lib/utils");
		document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
			const ts = el.getAttribute("data-timestamp");
			if (!ts) return;
			const date = new Date(Number(ts));
			el.textContent = timeAgo(date);
		});
	};

	update();
	window.__timeAgoTimer = window.setInterval(update, interval);

	// 页面回到前台时刷新一次，避免时间滞后
	if (window.__timeAgoVisibilityHandler) {
		document.removeEventListener(
			"visibilitychange",
			window.__timeAgoVisibilityHandler,
		);
	}

	const onVisibility = () => {
		if (document.visibilityState === "visible") update();
	};

	window.__timeAgoVisibilityHandler = onVisibility;

	document.addEventListener("visibilitychange", onVisibility, {
		passive: true,
	});
}
