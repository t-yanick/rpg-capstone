import './main.scss';

// import Game from './app/app';

import Phaser from 'phaser';

import config from './app/config';
import BootScene from './scenes/BootScene'

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.start('BootScene');
        this.scene.add('Boot', BootScene);
    }
}

export default Game;

console.log('Hello World');

window.game = new Game();

window.game.soundOn = true;