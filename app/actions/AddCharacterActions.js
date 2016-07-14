/**
 * Created by jilion.chen on 2016/7/13.
 */
import alt from '../alt';

class AddCharacterActions {
	constructor() {
		this.generateActions(
			'addCharacterSuccess',
			'addCharacterFail',
			'updateName',
			'updateGender',
			'invalidName',
			'invalidGender'
		);
	}

	addCharacter(name, gender) {
		$.ajax({
				type: 'POST',
				url: '/api/characters',
				data: { name: name, gender: gender }
			})
			.done((data) => {
				this.addCharacterSuccess(data.message);
			})
			.fail((jqXhr) => {
				this.addCharacterFail(jqXhr.responseJSON.message);
			});
	}
}

export default alt.createActions(AddCharacterActions);