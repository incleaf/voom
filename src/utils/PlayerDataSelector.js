import langaugeMapper from '../api/languageMapper';

// TODO: 데이터 타입 확인 후 소수점, 변환같은 처리를 해줘야 함
export const PlayerDataSelector = (data, locale) => (...key) => ({
  value: key.reduce((prevValue, currentValue, index) => (
      prevValue[currentValue]
  ), data),
  key: key.reduce((prevValue, currentValue, index) => {
    if (index === 0) {
      return prevValue[currentValue]
    } else if (index === key.length - 1) {
      return prevValue.childs[currentValue].text[locale];
    } else {
      return prevValue.childs[currentValue]
    }
  }, langaugeMapper)
});
