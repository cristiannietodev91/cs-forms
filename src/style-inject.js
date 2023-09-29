export default function styleInject(css, id, { insertAt } = {}) {
	if (!css) return;
	if (typeof document === "undefined") {
		globalThis.ssrCss = globalThis.ssrCss || [];
		const keys = globalThis.ssrCss.reduce((acc, curr)=> {
			return {
				...acc,
				[curr.id]: {
					...curr
				}
			};
		},{});
		if(!keys[id]){
			globalThis.ssrCss.push({ css, id });
		}
		return;
	}

	if (document.getElementById(id)) return;

	const head = document.head || document.getElementsByTagName("head")[0];
	const style = document.createElement("style");
	style.id = id;
	style.type = "text/css";

	if (insertAt === "top") {
		if (head.firstChild) {
			head.insertBefore(style, head.firstChild);
		} else {
			head.appendChild(style);
		}
	} else {
		head.appendChild(style);
	}

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
}