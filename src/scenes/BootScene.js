import Phaser from 'phaser';

// SCENE THAT WILL START THE GAME

class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    init() {

    }

    create() {
        this.scene.start('Preloader');
    }
}

export default BootScene;