import Phaser from 'phaser';

// SCENE THAT LOADS ALL ASSETS OF THE GAME
class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    init() {
    }

    preload() {
        this.add.image(400, 200, 'logo');
    }

    create() {
        // let bg = this.add.image(0, 0, 'title');
    }
}

export default PreloaderScene;