import Phaser from 'phaser';

export default {

    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 400,
    height: 250,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        },
    },
    // scene: [PreloadScene, Game],
    scale: {
        zoom: 2
    }
};
