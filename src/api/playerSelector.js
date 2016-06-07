const getValue = (data, key) => key.reduce((previous, current, index) => {
  if (index === 0) {
    return data[current];
  } else {
    return previous[current];
  }
});

export const playerSelector = (locale, data) => {
  const localeInfo = require(`./player-${locale}`);
  return (...keys) => {
    const lenth = keys.length;
    keys.reduce((previousValue, currentValue, index, arr) => {
      if (index === 0) {
        return
      } else if (index === length - 2) {

      } else {

      }
    });
  };
};

const data = ['career_stats', 'combat', 'damage_done'];
