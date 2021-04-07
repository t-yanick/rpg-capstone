import Phaser from 'phaser';
// import Chest from '../Classes/Chest';
import Map from '../Classes/Map';

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('Ui');
    }

    create() {
        this.createMap();
        this.createAudio();
        this.createGroups();
        this.createInput();
        this.createGameManager();

    }

    update() {

    }

    createAudio() {

    }

    createPlayer() {

    }

    createGroups() {

    }

    spawnChest() {

    }

    spawnMonster() {

    }

    createInput() {

    }

    addCollisions() {

    }

    enemyOverlap() {

    }

    collectChest() {

    }

    createMap() {
        this.map = new Map(this, 'map', 'background', 'blocked');
    }

    createGameManager() {

    }
}

export default GameScene;