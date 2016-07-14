/**
 * Created by jilion.chen on 2016/7/14.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.characters = [];
	}

	onGetTwoCharactersSuccess(data) {
		this.characters = data;
	}

	onGetTwoCharactersFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onVoteFail(errorMessage) {
		toastr.error(errorMessage);
	}
}

export default alt.createStore(HomeStore);