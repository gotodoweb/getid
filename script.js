import { start } from "./modules/start.js";



const init = (selector) => {
	const app = document.querySelector(selector);
	// getname(app);

	

	start(app);
};



init('.app-container');