const windowAcrions = {
  changewidth(width) {
    return {
      type: 'CHANGE_WINDOW_WIDTH',
      width: width,
    };
  },
  changeheight(height) {
    return {
      type: 'CHANGE_WINDOW_HEIGHT',
      height: height,
    };
  },
};

export default windowAcrions;
