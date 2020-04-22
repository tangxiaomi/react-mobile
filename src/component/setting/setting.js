import React, { Component }  from 'react';
import RadioGroup from './radioGroup/radioGroup';
import Radio from './radio/radio';
import { Button } from 'antd-mobile';

class Test extends Component {
  constructor(props) {
      super(props)
      this.state = {
         active:1
      }
  }
  onGroupChange(value) {
      this.setState({
          active: value
      })
  }
  render() {
      return (
        <div>
            <RadioGroup onChange={this.onGroupChange.bind(this)} active={this.state.active}>
                 <Radio value={1}>使用余额支付</Radio>
                 <Radio value={2}>使用微信支付</Radio>
            </RadioGroup>
           <Button onClick={()=>{
                        console.log("此时选中的是:"+this.state.active)
                    }}>下一步</Button>
        </div>
          )
  }
}
export default Test;
