const displayFunction = data => {
  let lengthValue = '';
  if (data.length && !isNaN(data.length)) {
    lengthValue = (data.length * 0.1).toFixed(3) + ' cm';
  }
  return lengthValue;
};

export const length = {
  id: 'Length',
  name: 'Length',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Length',
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
