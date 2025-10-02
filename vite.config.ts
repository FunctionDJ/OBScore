import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		watch: {
			ignored: "obscore-save.json",
		},
	},
	build: {
		rollupOptions: {
			input: {
				controller: "./controller/index.html",
				scoreboard: "./scoreboard/index.html",
			},
		},
	},
});
