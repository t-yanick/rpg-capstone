import Phaser from 'phaser';

import PreloadScene from './scenes/PreloadScene'
import Game from './scenes/Game'

export default new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        },
    },
    scene: [PreloadScene, Game]
})
