import React from 'react';
import Nav from '../components/Nav';
import MdSearch from 'react-icons/lib/md/search';

const TitleWithDivider = (props) => (
  <div>
    <div className="title-wrapper">
      <h2 className="title">{props.title}</h2>
      <span className="title-more">더 보기 ></span>
    </div>
    <hr className="title-divider"/>
  </div>
);

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

        <div className="contents-wrapper wrapper">
          <div className="col col-8">
            <section className="main-video-box">
              <TitleWithDivider title="Hot 영상"/>
            </section>
            <section className="main-post-box">
              <TitleWithDivider title="Hot 게시물"/>
            </section>
          </div>
          <div className="col col-4">
            <section className="main-ranking-box">
              <TitleWithDivider title="랭킹"/>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
