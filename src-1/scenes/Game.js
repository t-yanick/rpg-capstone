import Phaser from 'phaser';
import dungeon from '../../Public/tiles/dungeon-tiles.png'
import dungeonjson from '../../Public/tiles/dungeon-tilemap.json'

export default class Game extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    preload() {
        this.load.image('tiles', dungeon);
        this.load.tilemapTiledJSON('dungeon', dungeonjson);
    }

    create() {
        const map = this.make.tilemap({ key: 'dungeon' })
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16, 1, 2)
        map.createLayer('Ground', tileset)
    }
}