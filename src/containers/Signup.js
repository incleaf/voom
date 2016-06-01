import React from 'react';
import { connect } from 'react-redux';
import { setSignupData, SIGNUP_ACCOUNT, SIGNUP_AUTHORIZE, SIGNUP_CLEAR_ALL, SIGNUP_MOVE_PAGE } from '../actions';
import { IndexLink, Link } from 'react-router';

const SignupMenu = (props) => {
  const { title, handleClick } = props;
  return (
    <div>
      <div style={{backgroundColor: 'white', height: '40px'}}>
        <p className="inline-block">{title}</p>
        <button style={{float: 'right'}} onClick={handleClick}>다음</button>
      </div>
    </div>
    )
};

class Signup extends React.Component {
  render() {
    const { dispatch, signup } = this.props;
    switch(signup.currentPage) {
      case 'account':
        return (
          <div key="1">
            <SignupMenu title="1. 회원가입" handleClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'authorize'))}/>
            <div>
              id: <input type="text" defaultValue={signup.account.id}
                         onChange={e => dispatch(setSignupData(SIGNUP_ACCOUNT, Object.assign({}, signup.account, {id: e.target.value})))}/>
            </div>
            <div>
              pw: <input type="text" defaultValue={signup.account.pw}
                         onChange={e => dispatch(setSignupData(SIGNUP_ACCOUNT, Object.assign({}, signup.account, {pw: e.target.value})))}/>
            </div>
          </div>
        );
      case 'authorize':
        return (
          <div key="2">
            <SignupMenu title="2. 개인인증" handleClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'complete'))} />
            <div>
              mobile: <input type="text" defaultValue={signup.authorize.mobile}
                         onChange={e => dispatch(setSignupData(SIGNUP_AUTHORIZE, Object.assign({}, signup.authorize, {mobile: e.target.value})))}/>
            </div>
            <div>
              pic: <input type="text" defaultValue={signup.authorize.pic}
                         onChange={e => dispatch(setSignupData(SIGNUP_AUTHORIZE, Object.assign({}, signup.authorize, {pic: e.target.value})))}/>
            </div>
          </div>
        );
      case 'complete':
        return (
          <div>
            <SignupMenu title="3. 완료" handleClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'check'))} />
          </div>
        );
      case 'check':
        return (
          <div>
            <p onClick={() => dispatch(setSignupData(SIGNUP_CLEAR_ALL, null))}><Link to="/">메인으로 돌아가기</Link></p>
            <ul>
              <li onClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'account'))}>1. 회원과임</li>
              <li onClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'authorize'))}>2. 개인인증</li>
              <li onClick={() => dispatch(setSignupData(SIGNUP_MOVE_PAGE, 'complete'))}>3. 완료</li>
            </ul>
          </div>
        );
      default: <div>404 Not Found</div>
    }
  }

  componentDidMount() {
    // debugger;
  }
}

Signup.propTypes = {};
Signup.defaultProps = {};

export default connect(state => state)(Signup);
