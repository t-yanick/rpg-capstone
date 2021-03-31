import Phaser from 'phaser';

import config from './config';
import BootScene from '../scenes/BootScene'

class Game extends Phaser.Game {
    constructor() {
        super(config);
        // this.scene.start('BootScene');
        this.scene.add('Boot', BootScene);
    }
}

export default Game;