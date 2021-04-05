import Phaser from 'phaser';

const mapJSON = require('../../assets/level/large_level1.json');

// SCENE THAT WILL START THE GAME

class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.loadImages();
        this.loadSpriteSheets();
        this.loadAudio();
        this.loadTileMap();
    }

    loadImages() {
        this.load.image('logo', 'assets/zenza_logo.png');
        this.load.image('button1', 'assets/images/ui/blue_button01.png');
        this.load.image('background', 'assets/level/background-extruded.png');
    }

    loadSpriteSheets() {

    }

    loadAudio() {

    }

    loadTileMap() {
        this.load.tilemapTiledJSON('map', mapJSON);
    }


    create() {
        this.scene.start('Preloader');
    }
}

export default BootScene;