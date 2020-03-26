import { AppState } from "./state.js";
import { render } from "./render.js";

const state = new AppState();

const game = document.querySelector("#game");

// Kézi tesztelés
state.init(5, 5, 15);
game.innerHTML = render(state);