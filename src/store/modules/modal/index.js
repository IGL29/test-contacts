const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SWITCH_MODAL = 'SWITCH_MODAL';

// ACTIONS

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const switchModal = () => {
  return {
    type: SWITCH_MODAL,
  }
}

// STATE

const initialState = {
  isModalOpen: false,
}

// REDUCER

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {...state,
        isModalOpen: true,
      };

    case CLOSE_MODAL:
      return {...state,
        isModalOpen: false
      };

    case SWITCH_MODAL:
      return {...state,
        isModalOpen: !state.isModalOpen
      };

    default:
      return state;
  }
}

export default modalReducer;
