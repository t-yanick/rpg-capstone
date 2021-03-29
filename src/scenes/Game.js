import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {

    }

    create() {
        this.add.image(0, 0, 'tiles')
    }
}