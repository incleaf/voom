import React from 'react';
import Slider from 'react-slick';
import Card from '../components/Card';
import { splitText } from 'utils/util';
import { connect } from 'react-redux';
import { fetchSpecialAds, fetchNormalAds } from '../actions';

class Feed extends React.Component {
  renderImageAds(key) {
    const images = [];
    this.props.ad[key].item.forEach((ad, key) => {
      if (ad.image !== "") {
        images.push(<img src={ad.image} key={key}/>);
      }
    });
    return images;
  }

  render() {
    const mainSliderSettings = {
      arrows: false,
      infinite: false,
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="feed">
        <Card indicatorColor="red" padding={0}>
          <Card>
            <div key="1" className="card-title">
              <p>
              {`나의 애딧 `}
              <span ref="myAddit" className="feed-emphasize-addit">{ this.props.currentAddit }</span>
              <button key="2" className="btn btn-rounded btn-border-red">구매하기</button>
              </p>
            </div>
          </Card>
          <hr className="divider"/>
          <div style={{padding: 20, textAlign: 'center'}}>
            <p style={{color: 'gray', fontSize: '12px'}}>캠페인 10건 참여하고 다음 주 출석애딧 50 받기 ></p>
            <div style={{marginTop: 10}}>
            </div>
          </div>
        </Card>

        <Card padding={0}>
          <div></div>
          <div>
            <Slider {...mainSliderSettings}>
              {this.renderImageAds('special')}
            </Slider>
          </div>
        </Card>

        <Card padding={0} buttonText="캠페인 더보기">
          <div style={{padding: 12, textAlign: 'center'}}>
            <p className="card-title">무료 애딧 받기</p>
            <p className="card-contents" style={{marginTop: '6px'}}>오늘 690애딧을 더 받을 수 있어요</p>
          </div>
          <hr className="divider"/>
          <div>
            <Slider {...mainSliderSettings}>
              {this.renderImageAds('normal')}
            </Slider>
          </div>
          <hr className="divider"/>
        </Card>

        <Card title="지금까지 절약한 프린팅비!" indicatorColor="red">
          <p className="feed-addit-has-saved">
            <span className="feed-emphasize-addit">{ this.props.additHasSaved }</span>{` 애딧`}
          </p>
          <p className="card-contents">
            { splitText(`아직 프린팅을 한 적이 없으시군요!
            갖고 계신 애딧으로 프린팅을 해보세요`) }
          </p>
        </Card>

        <div className="card-margin-top">
          <div className="col col-6">
            <Card title="프린팅 존"
                  contents="애딧, 여기서 쓰세요"
                  additionalClass={['card-half']}
                  indicatorColor="blue"
            />
          </div>
          <div className="col col-6">
            <Card title="애딧 받기 팁"
                  contents="이렇게 받을 수도 있어요"
                  additionalClass={['card-half']}
                  indicatorColor="red"
            />
          </div>
        </div>

        <Card title="친구초대하고 200애딧 받기"
              buttonText="친구 초대하기"
              indicatorColor="blue">
          <p className="card-contents">
              친구초대 성공하면 추천인에게 <span className="blue feed-invitation-addit">200애딧</span><br />
              초대된 친구에게 <span className="blue feed-invitation-addit">500애딧</span>을 드려요.<br />
              선배, 동기, 후배들을 초대하고 애딧 부자 되세요~!
          </p>
        </Card>

        <Card title="허니스크린에서도 애드투페이퍼!"
              contents={`허니스크린 상점에서
              애드투페이퍼 쿠폰을 구매할 수 있어요`}
              buttonText="허니슼릔 포인트로 애딧 받기"
              indicatorColor="blue"
        />
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.ad.special.isFetching) {
      dispatch(fetchSpecialAds());
    }
    if (!this.props.ad.normal.isFetching) {
      dispatch(fetchNormalAds());
    }
  }
}

Feed.propTypes = {};
Feed.defaultProps = {
  currentAddit: 2400,
  additHasSaved: 300
};

export default connect(state => state.feed)(Feed);
