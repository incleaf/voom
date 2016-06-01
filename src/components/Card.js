import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { splitText } from 'utils/util';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  renderCardButton(buttonText) {
    if (!buttonText) return;
    return (
      <div>
        <hr className="divider"/>
        <div className="card-btn">{buttonText}</div>
      </div>
    )
  }

  renderTextElement(type, element) {
    if (!element) return;
    const className = `card-${type}`;
    return (
      typeof element === 'string'
      ? <p className={className}>{ splitText(element) }</p>
      : <div className={className}>{ element }</div>
    )
  }

  render() {
    const { children, indicatorColor, title, contents, buttonText, additionalClass, padding } = this.props;
    const containerClass = classNames([`card`, `card-indicator-${indicatorColor}`, ...additionalClass]);

    return (
      <div className={containerClass}>
        <div style={{padding: padding}}>
          { this.renderTextElement('title', title) }
          { this.renderTextElement('contents', contents) }
          { children }
        </div>
        { this.renderCardButton(buttonText) }
      </div>
    );
  }
}

Card.propTypes = {};
Card.defaultProps = {
  additionalClass: [],
  padding: 20
};

export default Card;
