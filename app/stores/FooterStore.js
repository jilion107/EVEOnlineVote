/**
 * Created by jilion.chen on 2016/7/13.
 */
import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
		this.characters = [];
	}

	onGetTopCharactersSuccess(data) {
		this.characters = data.slice(0, 5);
	}

	onGetaTopCharactersFail(jqXhr) {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}
}

export default alt.createStore(FooterStore);