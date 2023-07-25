const defaultState = {
  windowLevelData: {
    1: { description: 'Soft Tissue', window: '400', level: '50' },
    2: { description: 'Lung', window: '1500', level: '-500' },
    3: { description: 'Liver', window: '150', level: '30' },
    4: { description: 'Bone', window: '2000', level: '350' },
    5: { description: 'Brain', window: '110', level: '35' },
    6: { description: 'Mediastinum', window: '400', level: '80' },
    7: { description: 'Abdomen', window: '320', level: '50' },
    8: { description: 'MIP', window: '380', level: '120' },
    9: { description: 'Trest', window: '1', level: '1' },
  },
  generalPreferences: {
    language: 'pt-BR',
  },
};

const preferences = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_PREFERENCES': {
      return Object.assign({}, state, action.state);
    }
    default:
      return state;
  }
};

export { defaultState };
export default preferences;
