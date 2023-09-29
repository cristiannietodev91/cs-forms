import React from "react";

type SSRCssModule = {
    css: string
    id: string
}

interface GlobalThis {
    ssrCss?: SSRCssModule[]
}

declare const globalThis: GlobalThis;

export const NextSSRInjectStyle = () => {
	if (!globalThis.ssrCss) return null;

	return (
		<>
			{globalThis.ssrCss.map((module: { css: string; id: string }) => (
				<style
					dangerouslySetInnerHTML={{
						__html: module.css,
					}}
					id={module.id}
					key={module.id}></style>
			))}
		</>
	);
};