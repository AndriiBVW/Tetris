import Game from "./modules/game.js";
import View from "./modules/view.js";
import Controller from "./modules/controller.js";

const root = document.querySelector("#root");

const game = new Game();
const view = new View(root, 360, 480, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;
