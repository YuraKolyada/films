import * as c from '../constants/modal';


export let showModal = (type, props) => ({
	type: c.SHOW_MODAL,
	payload: {
		type,
		props,
	}
});

export let hideModal = () => ({
	type: c.HIDE_MODAL,
})
