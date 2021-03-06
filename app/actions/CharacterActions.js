/**
 * Created by jilion.chen on 2016/7/14.
 */
import alt from '../alt';

class CharacterActions {
	constructor() {
		this.generateActions(
			'reportSuccess',
			'reportFail',
			'getCharacterSuccess',
			'getCharacterFail'
		);
	}

	getCharacter(characterId) {
		$.ajax({ url: '/api/characters/' + characterId })
			.done((data) => {
				this.getCharacterSuccess(data);
			})
			.fail((jqXhr) => {
				this.getCharacterFail(jqXhr);
			});
	}

	report(characterId) {
		$.ajax({
				type: 'POST',
				url: '/api/report',
				data: { characterId: characterId }
			})
			.done(() => {
				this.reportSuccess();
			})
			.fail((jqXhr) => {
				this.reportFail(jqXhr);
			});
	}
}

export default alt.createActions(CharacterActions);