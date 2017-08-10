import * as c  from '../constants/modal';

const initialState = {
  type: null,
  props: {},
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case c.SHOW_MODAL:
      const {type, props} = action.payload;
      return {
        ...state,
        type,
        props,
      };
    case c.HIDE_MODAL:
      return {
        ...state,
        type: null,
        props: {},
      };
    default:
      return state;
  }
}

