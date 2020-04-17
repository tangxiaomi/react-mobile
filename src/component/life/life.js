import React, { useState } from "react";
import { NavBar, Icon, Popover, Carousel, WingBlank, Card, WhiteSpace  } from 'antd-mobile'; // 用多少就要引入多少吗？？
import './life.scss';
import { useHistory } from 'react-router-dom'; // 是个hooks router是5.1以上才可以用

function Life(){
  let router = useHistory();
  const Item = Popover.Item;
  const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
  const [visible, setVisible]=useState(false);
  const [selected, setSelected]=useState('');
  const [imgHeight, setImgHeight]=useState(176);
  const [imgData, setImgData]=useState(['1', '2', '3']);
  const [list, setList]=useState(['1', '2', '3', '4', '5']);

//   useEffect(()=>{
//     setTimeout(() => {
//       setImgData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']);
//     }, 100);
//  })

 const goToDetailPage = (index) => {
  router.push(`/detail/${index}`)
 }

  return (
    <div>
      <NavBar
        className="navbar"
        mode="dark"
        icon={<Icon type="left" />}
        rightContent={<Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={visible}
          overlay={[
            (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
            (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
            (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
              <span style={{ marginRight: 5 }}>Help</span>
            </Item>),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-10, 0],
          }}
          onVisibleChange={(visible) => {setVisible(visible)}}
          onSelect={(opt) => { setVisible(false); setSelected(opt.props.value);}}
        >
          <div style={{
            height: '100%',
            padding: '0 15px',
            marginRight: '-15px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <Icon type="ellipsis" />
          </div>
        </Popover>}
      >NavBar
      </NavBar>

      <WingBlank className="carousel-container">
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {imgData.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight('auto')
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>

      <WhiteSpace size="lg" />
      <div className="life-list-container">
      {
        list.map((list, index) => (
          <div className='list-content' key={list} onClick={() => goToDetailPage(index)}>
            <Card full>
              <Card.Header
                title="This is title"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                <div>This is content of `Card`</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
          </div>
        ))
      }
      </div>
    </div>
  );
}
export default Life;
