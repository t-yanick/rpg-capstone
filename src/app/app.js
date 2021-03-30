import Phaser from 'phaser';

import config from './config';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.start('BootScene');
    }
}

export default Game;