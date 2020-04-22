import React from 'react';
import { Icon, Radio, Checkbox } from 'antd-mobile';
import './friend.scss';



export default () => {
  const CheckboxItem = Checkbox.CheckboxItem;
  const AgreeItem = Checkbox.AgreeItem;
  const checkData = [
    { value: 0, label: '发热(体温≥37度4)' },
    { value: 1, label: '乏力' },
    { value: 2, label: '干咳' },
    { value: 3, label: '鼻塞' },
    { value: 4, label: '流涕' },
    { value: 5, label: '咽痛' },
    { value: 6, label: '腹泻' },
  ];
  // const test = Radio.RadioItem;
  return (
    <div className="friend-container">
      <div className="header">
       <div className="list-title">
          <Icon type="left" className="left-icon" size='md'/>
          <span>宁波健康码</span>
        </div>
        <div className="list-content">
          <Icon type="check-circle-o" className="check-icon" size='xs'/>
          <span>已实名认证</span>
        </div>
      </div>
      <div className="form-container">
        <form>
          <div>
            <label className="label required">姓名</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label className="label required">证件号码</label>
            <input type="text" name="id" />
          </div>
          <div>
            <label className="label required">手机号</label>
            <input type="text" name="telnum" />
          </div>
          <div>
            <label className="label required">健康信息</label>
            <div>
              <ul>
                <li>
                  <span className="qus-title">您是否在宁波？【含宁波所有区县（市），下同】</span>
                  <div>
                    {/* <input className="my-radio" type="radio" name="test" onChange={e => console.log('checkbox', e)} />
                    <input className="my-radio" type="radio" name="test" onChange={e => console.log('checkbox', e)} /> */}
                    <Radio className="my-radio" name="test" value="1" onChange={e => console.log('checkbox', e)}>是</Radio>
                    <Radio className="my-radio" name="test" value="2" onChange={e => console.log('checkbox', e)}>否</Radio>
                  </div>
                </li>
                <li>
                  <span className="qus-title">您最近14天是否离开过当前所在地？</span>
                  <div>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>是</Radio>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>否</Radio>
                  </div>
                </li>
                <li>
                  <span className="qus-title">您是否处在隔离中，或者14天内与确诊病人有密切的接触，或者确诊出院未满14天？</span>
                  <div>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>是</Radio>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>否</Radio>
                  </div>
                </li>
                <li>
                  <span className="qus-title">您当前健康状态是否有异常？</span>
                  <div>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>是</Radio>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>否</Radio>
                  </div>
                  <div className="extra-content">
                    <span>当前健康状况（若有以下状况，请勾选）</span>
                    {checkData.map(i => (
                      <CheckboxItem key={i.value} onChange={() => console.log('checkbox')}>
                        {i.label}
                      </CheckboxItem>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="commit-container">
            <span className="required commit-title">本人郑重承诺</span>
            <div className="agree">
              <div>
                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                </AgreeItem>
              </div>
              <div>
                为疫情防控，本人同意以上信息依法提交所在辖区疫情防控部门统筹管理。
              </div>
            </div>
            <div className="commit">
              <div>
                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                </AgreeItem>
              </div>
              <div>
                上述信息是我本人填写，本人对信息内容的真实性和完整性负责。如果信息有误或缺失，本人愿承担相应的法律责任。同时，本人保证遵守防疫管控的各项规定，配合并听从各项措施和要求。
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
