import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import YoutubeThumbnail from  '../components/YoutubeThumbnail';
import WinningChart from '../components/WinningChart';


import MdSearch from 'react-icons/lib/md/search';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaCommentingO from 'react-icons/lib/fa/commenting-o';

const SectionWrapper = (props) => (
  <div className="section-wrapper">
    <div className="section-wrapper-title-wrapper">
      <h2 className="section-wrapper-title">{props.title}</h2>
      <span className="section-wrapper-title-more">더 보기 ></span>
    </div>
    <hr className="section-wrapper-divider"/>
    <div className="section-wrapper-contents">
      {
        props.isFetching ?
        <div className="loading-wrapper">
          <div className="loading-icon"></div>
        </div> : null
      }
      {props.children}
    </div>
  </div>
);

class Main extends React.Component {
  render() {
    const { searchLog, video, post, ranking } = this.props;
    const renderSearchLogs = () => {
      if (searchLog.data.length === 0) return;
      return (
        <ul className="main-search-box-log">
          <li className="main-search-box-log-title">최근 검색: </li>
          {searchLog.data.map((item, idx) => (
            <li className="main-search-box-log-item" key={idx}>{item.nickname}</li>
          ))}
        </ul>
      )
    };
    const renderVideos = () => {
      if (video.data.length === 0) return;
      return (
        video.data.map(item =>
          <div className="video-item" key={item.id}>
            <YoutubeThumbnail _className="video-item-thumbnail" id={item.videoId} />
            <div className="video-item-contents">
              <h3 className="video-item-title">{item.title}</h3>
              <div className="video-item-info">
                <span className="video-item-info-item">
                  <FaThumbsOUp />{' '}
                  {item.likes}
                </span>
                <span className="video-item-info-item">
                  <FaThumbsODown />{' '}
                  {item.dislikes}
                </span>
                <span className="video-item-info-item">
                  <FaCommentingO />{' '}
                  {item.comments}
                </span>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        )
      )
    };

    const renderPosts = () => {
      if (post.data.length === 0) return;
      return (post.data.map((item) => (
        <div className="posts-item" key={item.id}>
          <h3 className="posts-item-title">{item.title}</h3>
          <div className="posts-item-info">
            <span className="posts-item-info-item">
              <FaThumbsOUp />{' '}
              {item.likes}
            </span>
            <span className="posts-item-info-item">
              <FaThumbsODown />{' '}
              {item.dislikes}
            </span>
            <span className="posts-item-info-item">
              <FaCommentingO />{' '}
              {item.comments}
            </span>
          </div>
        </div>
      )));
    };

    const renderRanking = () => {
      if (ranking.data.length === 0) return;
      return (ranking.data.map((item, idx) => (
        <div className="ranking-item" key={item.ranking}>
          <span className="ranking-item-ranking">#{item.ranking}</span>
          <span>{item.nickname}</span>
          <div className="ranking-item-chart">
            <WinningChart win={item.win} lose={item.lose} height="24px" width="100px" />
          </div>
        </div>
      )));
    };

    return (
      <div className="main">
        <section className="search">
          <div className="wrapper">
            <div className="searchbox">
              <input className="searchbox-input" placeholder="배틀태그를 입력하세요" type="text"/>
              <button className="searchbox-btn"><MdSearch /></button>
            </div>
            <p className="search-tip">※ 블리자드가 한글 검색을 지원하지 않아서, 영문 배틀태그만 검색이 가능합니다.</p>
          </div>
        </section>

        <div className="contents-wrapper wrapper">
          <div className="col col-8">
            <section className="video">
              <SectionWrapper title="Hot 영상" isFetching={video.isFetching}>
                {renderVideos()}
                <div className="clearfix"></div>
              </SectionWrapper>
            </section>
            <section className="posts">
              <SectionWrapper title="Hot 게시물" isFetching={post.isFetching}>
                {renderPosts()}
              </SectionWrapper>
            </section>
          </div>
          <div className="col col-4">
            <section className="ranking">
              <SectionWrapper title="랭킹" isFetching={ranking.isFetching}>
                {renderRanking()}
              </SectionWrapper>
            </section>

            <div style={{margin: '30px 0 0 30px', backgroundColor: 'gray', height: '200px'}}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default connect(state => state.main)(Main);
