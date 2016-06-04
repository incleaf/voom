import React from 'react';

const WinningChart = (props) => {
  const { win, lose, width, height } = props;
  const getWidthWithStyle = (criteria) => (
    {
      width: `${Math.round((criteria / (win + lose)) * 100)}%`
    }
  );
  return (
    <div className="winning-chart" style={{width, lineHeight: height}}>
      <span className="winning-chart-win" style={getWidthWithStyle(win)}>
        <span>
          {`${props.win}W`}
        </span>
      </span>
      <span className="winning-chart-lose" style={getWidthWithStyle(lose)}>
        <span>
          {`${props.lose}L`}
        </span>
      </span>
    </div>
  )
};

WinningChart.propTypes = {};
WinningChart.defaultProps = {};

export default WinningChart;
