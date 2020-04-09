import React, { useState, useEffect } from "react";
import { NavBar, Icon, Popover, Carousel, WingBlank } from 'antd-mobile'; // 用多少就要引入多少吗？？

function Index(){
  const Item = Popover.Item;
  const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
  const [visible, setVisible]=useState(false);
  const [selected, setSelected]=useState('');
  const [imgHeight, setImgHeight]=useState(176);
  const [imgData, setImgData]=useState(['1', '2', '3']);

  useEffect(()=>{
    setTimeout(() => {
      setImgData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']);
    }, 100);
 })

  return (
    <div>
      <NavBar
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

      <WingBlank>
        <Carousel
          autoplay={true}
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
    </div>
  );
}
export default Index;