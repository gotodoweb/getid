import start from "./modules/start.js";

const init = (selector) => {
	const app = document.querySelector(selector);

	start(app);
};



init('.app-container');