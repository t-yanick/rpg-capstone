import Phaser from 'phaser';

// SCENE THAT WILL START THE GAME

class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    init() {
        this.URL = this.sys.game.URL;
        this.CONFIG = this.sys.game.CONFIG;
    }

    create() {
        this.scene.start('Preloader');
    }
}

export default BootScene;