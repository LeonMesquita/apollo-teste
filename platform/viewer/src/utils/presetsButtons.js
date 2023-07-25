import store from '../store';
const state = store.getState();
const { preferences = {} } = state;

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

export const presetsButtons = Object.entries(preferences.windowLevelData).map(
  ([id, data]) => ({
    id: data.description.replace(/\s/g, ''),
    label: data.description,
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: data.description.replace(/\s/g, '') },
    presets: true,
    window: data.window,
    level: data.level,
  })
);
