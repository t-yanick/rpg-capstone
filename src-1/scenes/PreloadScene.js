import Phaser from 'phaser';
import dungeon from '../../Public/tiles/dungeon-tiles.png'
import dungeonjson from '../../Public/tiles/dungeon-tilemap.json'

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }
    preload() {
        this.load.image('tiles', dungeon);
        this.load.tilemapTiledJSON('dungeon', dungeonjson);
        // this.load.atlas('faune', 'character/fauna.png', 'character/fauna.json');
        // this.load.atlas('lizard', 'enemies/lizard.png', 'enemies/lizard.json');
        // this.load.atlas('treasure', 'items/treasure.png', 'items/treasure.json');
        // this.load.image('ui-heart-empty', 'ui/ui_heart_empty.png');
        // this.load.image('ui-heart-full', 'ui/ui_heart_full.png');
        // this.load.image('knife', 'weapons/weapon_knife.png');
    }
    create() {
        this.scene.start('Game');
    }
}