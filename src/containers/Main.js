import React from 'react';
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
      {props.children}
    </div>
  </div>
);

class Main extends React.Component {
  render() {
    const { searchLogs, videos, posts, ranking } = this.props;
    const renderSearchLogs = () => {
      if (searchLogs.length === 0) return;
      return (
        <ul className="main-search-box-log">
          <li className="main-search-box-log-title">최근 검색: </li>
          {searchLogs.map((item, idx) => (
            <li className="main-search-box-log-item" key={idx}>{item.nickname}</li>
          ))}
        </ul>
      )
    };
    const renderVideos = () => {
      if (videos.length === 0) return;
      return (
        videos.map(item =>
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
      if (posts.length === 0) return;
      return (posts.map((item) => (
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
      if (ranking.length === 0) return;
      return (ranking.map((item, idx) => (
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
              <SectionWrapper title="Hot 영상">
                {renderVideos()}
                <div className="clearfix"></div>
              </SectionWrapper>
            </section>
            <section className="posts">
              <SectionWrapper title="Hot 게시물">
                {renderPosts()}
              </SectionWrapper>
            </section>
          </div>
          <div className="col col-4">
            <section className="ranking">
              <SectionWrapper title="랭킹">
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
Main.defaultProps = {
  searchLogs: [{
    battleTag: 'INCLEAF#3949',
    nickname: 'INCLEAF'
  }, {
    battleTag: 'DEMARLIK#3727',
    nickname: 'DEMARLIK'
  }, {
    battleTag: 'INCLEAF#3949',
    nickname: 'INCLEAF'
  }, {
    battleTag: 'DEMARLIK#3727',
    nickname: 'DEMARLIK'
  }, {
    battleTag: 'INCLEAF#3949',
    nickname: 'INCLEAF'
  }],
  videos: [{
    id: 1234,
    videoId: 'Yp9wMgMqoqA',
    title: '[오버워치] 아무도 범접할 수 없는 맥크리가 되고싶다.',
    url: 'https://www.youtube.com/watch?v=Yp9wMgMqoqA',
    likes: 50,
    dislikes: 10,
    comments: 13
  }, {
    id: 1235,
    videoId: 'QmdKnXq2Kr8',
    url: 'https://www.youtube.com/watch?v=QmdKnXq2Kr8',
    title: '오버워치 상자 50개 깡 & 전설스킨 구경 - 풍월량의 오버워치 (Overwatch)2016.5.24',
    likes: 30,
    dislikes: 10,
    comments: 6
  }, {
    id: 1236,
    videoId: 'tYJvjIB7eBc',
    url: 'https://www.youtube.com/watch?v=tYJvjIB7eBc',
    title: '오버워치 부산 사투리 쓰는 디바 D.Va 송하나',
    likes: 40,
    dislikes: 10,
    comments: 5
  }],
  posts: [{
    id: 133,
    title: '파라가 버프가 필요한 영웅인 이유',
    comments: 12,
    likes: 60,
    dislikes: 10
  }, {
    id: 136,
    title: '오버워치 캐릭터들 첫인상과 현인상',
    comments: 10,
    likes: 50,
    dislikes: 29
  }, {
    id: 150,
    title: '솔져76 성대모사 해보겠습니다',
    comments: 43,
    likes: 100,
    dislikes: 7
  }],
  ranking: [{
    ranking: 1,
    nickname: 'paradise',
    battletag: 1495,
    score: 1518554,
    win: 472,
    lose: 344
  }, {
    ranking: 2,
    nickname: 'Rawkus',
    battletag: 1108,
    score: 1515294,
    win: 415,
    lose: 380
  }, {
    ranking: 3,
    nickname: 'DemiAndSpice',
    battletag: 1634,
    score: 1499063,
    win: 489,
    lose: 470
  }, {
    ranking: 4,
    nickname: 'Leftforsaken',
    battletag: 1337,
    score: 1480195,
    win: 553,
    lose: 429
  }, {
    ranking: 5,
    nickname: 'SylvrX',
    battletag: 1247,
    score: 1465804,
    win: 486,
    lose: 362
  }]
};

export default Main;
