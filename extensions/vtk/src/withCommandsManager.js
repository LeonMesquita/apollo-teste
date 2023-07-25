import React from 'react';
// import Render3D from './Render3D.js';

export default function withCommandsManager(Component, commandsManager = {}) {
  return class WithCommandsManager extends React.Component {
    render() {
      return (
        <>
          <Component
            {...this.props}
            onScroll={viewportIndex =>
              commandsManager.runCommand('getVtkApiForViewportIndex', {
                index: viewportIndex,
              })
            }
          />
          {/* <Render3D /> */}
        </>
      );
    }
  };
}
