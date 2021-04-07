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
        this.load.image('logo', 'assets/zenva_logo.png');
        this.load.image('button1', 'assets/images/ui/blue_button01.png');
        this.load.image('background', 'assets/level/background-extruded.png');
    }

    loadSpriteSheets() {
        this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
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