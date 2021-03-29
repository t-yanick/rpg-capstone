import Phaser from 'phaser';
export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('preload-scene');
    }
    preload() {
        this.load.image('tiles', 'assets/tiles/dungeon-tiles.png');
        this.load.tilemapTiledJSON('dungeon', 'assets/dungeon-titlemap.json');
        // this.load.atlas('faune', 'character/fauna.png', 'character/fauna.json');
        // this.load.atlas('lizard', 'enemies/lizard.png', 'enemies/lizard.json');
        // this.load.atlas('treasure', 'items/treasure.png', 'items/treasure.json');
        // this.load.image('ui-heart-empty', 'ui/ui_heart_empty.png');
        // this.load.image('ui-heart-full', 'ui/ui_heart_full.png');
        // this.load.image('knife', 'weapons/weapon_knife.png');
    }
    create() {
        this.scene.start('game');
    }
}