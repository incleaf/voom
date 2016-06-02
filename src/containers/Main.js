import React from 'react';
import Nav from '../components/Nav';
import MdSearch from 'react-icons/lib/md/search';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="main-search-box">
          <div className="wrapper">
            <div className="input-box">
              <input placeholder="배틀태그를 입력하세요" type="text"/>
              <button><MdSearch /></button>
              <p>※ 블리자드가 한글 검색을 지원하지 않아서, 영문 배틀태그만 검색이 가능합니다.</p>
            </div>
          </div>
        </section>
        <section className="main-video-box">
          <div className="wrapper">
            <div className="title-wrapper">
              <h2 className="title">베스트 영상</h2>
              <span className="title-more">더 보기 ></span>
            </div>
            <div className="clearfix"></div>
            <hr className="title-divider"/>
          </div>
        </section>
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
