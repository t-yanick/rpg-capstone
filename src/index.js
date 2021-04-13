/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import UiScene from './scenes/UiScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import GuideScene from './scenes/GuideScene';
import GameOver from './scenes/GameOverScene';
import Model from './Classes/Model';
import ScoreScene from './scenes/ScoreScene';
import config from './Config/config';

class Game extends Phaser.Game {
	constructor() {
		super(config);
		this.scene.add('Boot', BootScene);
		this.scene.add('Preloader', PreloaderScene);
		this.scene.add('Title', TitleScene);
		this.scene.add('Options', OptionsScene);
		this.scene.add('Credits', CreditsScene);
		this.scene.add('Guide', GuideScene);
		this.scene.add('Game', GameScene);
		this.scene.add('Ui', UiScene);
		this.scene.add('GameOver', GameOver);
		this.scene.add('Score', ScoreScene);
		this.scene.start('Boot');

		const model = new Model();
		this.globals = { model, bgMusic: null };
	}
}

window.game = new Game();