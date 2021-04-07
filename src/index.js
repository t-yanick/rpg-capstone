import Phaser from 'phaser';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import UiScene from './Scenes/UiScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import GuideScene from './Scenes/GuideScene';
import Model from './Classes/Model';
import config from './Config/config';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        this.scene.add('Title', TitleScene);
        this.scene.add('Options', OptionsScene);
        this.scene.add('Guide', GuideScene);
        this.scene.add('Game', GameScene);
        this.scene.add('Ui', UiScene);
        this.scene.start('Boot');

        const model = new Model();
        this.globals = { model, bgMusic: null }

    }
}

// export default Game;

console.log('Hello World');

window.game = new Game();

// window.game.soundOn = true;