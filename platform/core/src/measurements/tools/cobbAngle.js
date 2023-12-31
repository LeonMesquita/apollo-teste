const displayFunction = data => {
  let text = '';
  if (data.rAngle && !isNaN(data.rAngle)) {
    text = data.rAngle.toFixed(2) + String.fromCharCode(parseInt('00B0', 16));
  }
  return text;
};

export const cobbAngle = {
  id: 'CobbAngle',
  name: 'CobbAngle',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Cobb Angle',
  options: {
    measurementTable: {
      displayFunction,
    },
    caseProgress: {
      include: true,
      evaluate: true,
    },
  },
};
