import Phaser from 'phaser';

export default class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui');
    }

    init() {
        this.gameScene = this.scene.get('Game');
        this.model = this.sys.game.globals.model;
    }

    create() {
        this.setupElements();
        this.setupEvents();
    }

    setupElements() {

    }

    setupEvents() {

    }
}