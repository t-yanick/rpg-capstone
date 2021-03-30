import Phaser from 'phaser';
import config from './config/Config';
import Game from './scenes/Game';
import PreloadScene from './scenes/PreloadScene';


class FullGame extends Phaser.Game {
    constructor() {
        super(config);

        this.scene.add('PreloadScene', PreloadScene);
        this.scene.add('Game', Game);
        this.scene.start('Game');

    }
}

window.game = new FullGame();