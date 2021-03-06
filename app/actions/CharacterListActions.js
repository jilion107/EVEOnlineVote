/**
 * Created by jilion.chen on 2016/7/14.
 */
import alt from '../alt';

class CharacterListActions {
	constructor() {
		this.generateActions(
			'getCharactersSuccess',
			'getCharactersFail'
		);
	}

	getCharacters(payload) {
		let url = '/api/characters/top';
		let params = {
			race: payload.race,
			bloodline: payload.bloodline
		};

		if (payload.category === 'female') {
			params.gender = 'female';
		} else if (payload.category === 'male') {
			params.gender = 'male';
		}

		if (payload.category === 'shame') {
			url = '/api/characters/shame';
		}

		$.ajax({ url: url, data: params })
			.done((data) => {
				this.getCharactersSuccess(data);
			})
			.fail((jqXhr) => {
				this.getCharactersFail(jqXhr);
			});
	}
}

export default alt.createActions(CharacterListActions);