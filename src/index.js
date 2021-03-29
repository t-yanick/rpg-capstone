import Phaser from 'phaser';
import config from './config/Config';
import Game from './scenes/Game';
import PreloadScene from './scenes/PreloadScene';


class FullGame extends Phaser.Game {
    constructor() {
        super(config);
        // const model = new Model();
        // this.globals = { model, bgMusic: null };
        this.scene.add('Game', Game);
        this.scene.add('PreloadScene', PreloadScene);

    }
}

window.game = new FullGame();