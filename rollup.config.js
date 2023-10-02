import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import autoprefixer from "autoprefixer";
import { randomUUID } from "node:crypto";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");

const isProduction = process.env.NODE_ENV === "production";

const styleInjectPath = path
	.resolve("./src/style-inject.js")
	.replace(/[\\/]+/g, "/");

const ids = new Map();
const getUniqueId = (id) => {
	if (ids.has(id)) return ids.get(id);
	const uid = randomUUID();
	ids.set(id, uid);

	return uid;
};

export default (async () => ({
	input: "src/index.ts",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
		},
		{
			file: packageJson.module,
			format: "esm",
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ tsconfig: "./tsconfig.json" }),
		postcss({
			plugins: [
				autoprefixer()
			],
			inject(cssVariableName, id) {
				return `
				  import styleInject from '${styleInjectPath}';
				  styleInject(${cssVariableName}, 'style-${getUniqueId(id)}');
				`;
			},
			minimize: true,
			modules: true,
		}),
		isProduction && (await import("@rollup/plugin-terser")).default()
	],
	external: ["react", "react-dom"],
}))();