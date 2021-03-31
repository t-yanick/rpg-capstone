import Phaser from 'phaser';
import logo1 from '../../assets/images/logo.png';
import forest from '../../assets/images/forest.png';

// SCENE THAT LOADS ALL ASSETS OF THE GAME
class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    init() {

    }

    preload() {
        this.load.image('title', logo1);
        this.load.image('background', forest);

        // MAP TILES
        this.load.image('tiles', tiles);

        // MAP IN JSON FORMAT
        this.load.tilemapTiledJSON('map', mapJson);
    }
}

export default PreloaderScene;