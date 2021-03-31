import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.map = this.make.tilemap({ key: 'map' });
        this.tiles = this.map.addTilesetImage('forest_tileset-32x32', tiles);
        // forest_tileset-32x32

        this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0)
    }
}

export default GameScene;