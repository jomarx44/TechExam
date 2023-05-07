const {ms, vs} = require('./scalingUtils');

const colors = {
  black: '#212124',
  greyDark: '#75767A',
  greyDarker: '#4C4C50',
  greyLight: '#D9DBE0',
  greyLighter: '#F8F8F8',
  neutralGrey: '#C5C9D0',
  primary: '#DC3224',
  white: '#FFF',
  greenDark: '#067E41',
};

const regularFont = (size, lineHeight) => {
  return {
    // fontFamily: 'DMSans-Regular',
    fontSize: ms(size),
    lineHeight: vs(lineHeight),
  };
};

const mediumFont = (size, lineHeight) => {
  return {
    // fontFamily: 'DMSans-Medium',
    fontSize: ms(size),
    lineHeight: vs(lineHeight),
  };
};

const boldFont = (size, lineHeight) => {
  return {
    // fontFamily: 'DMSans-Bold',
    fontSize: ms(size),
    lineHeight: vs(lineHeight),
  };
};

module.exports = {
  regularFont,
  mediumFont,
  boldFont,
  colors,
};
