import langaugeMapper from '../api/languageMapper';

export const PlayerDataSelector = (data, locale) => (...keys) => {
  const convertWithType = (value, type) => {
    switch (type) {
      case 'int':
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      case 'float':
        return value.toFixed(2);
      case 'time':
        return value;
      default:
        return value;
    }
  };
  const customMapper = (key) => {
    return {
      value: langaugeMapper.custom[key].value(data),
      key: langaugeMapper.custom[key].text[locale]
    };
  };

  return keys.map((key) => {
    return typeof key === 'string'
    ? customMapper(key)
    : {
      // TODO: 데이터 타입 확인 후 소수점, 변환같은 처리를 해줘야 함
      value: key.reduce((prevValue, currentValue, index) => {
        return prevValue[currentValue]
      }, data),
      key: key.reduce((prevValue, currentValue, index) => {
        if (index === 0) {
          return prevValue[currentValue]
        } else if (index === key.length - 1) {
          return prevValue.childs[currentValue].text[locale];
        } else {
          return prevValue.childs[currentValue]
        }
      }, langaugeMapper)
    }
  })
};
