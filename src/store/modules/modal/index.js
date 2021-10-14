const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SWITCH_MODAL = 'SWITCH_MODAL';

function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

function switchModal() {
  return {
    type: SWITCH_MODAL,
  }
}

export const openModalActionCreater = () => openModal();
export const closeModalActionCreater = () => closeModal();
export const switchModalActionCreater = () => switchModal();

const initialState = {
  isModalOpen: false,
}

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