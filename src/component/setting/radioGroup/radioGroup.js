import React, { Component } from 'react';

// props和this.prop的区别 是函数和类继承的区别吗，如果是，具体还有那些区别？
// 子组件和props.children的区别？
// React.Children当父组件的属性需要传给子组件的时候，就需要使用React.Children，否则直接使用props.children就可以
// props.children可以将所有的子组件显示出来
// React.cloneElement是React的顶层API，用来动态的修改child的props

class RadioGroup extends Component {
    handleActiveChange(value) {
        console.log(`${value}被选中了`)
        this.props.onChange(value)
    }
    render() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, child => {
                        let isActive = this.props.active === child.props.value ? true : false
                        return React.cloneElement(child, {
                            label: child.props.children, // 这里为什么是child.props
                            value: child.props.value,
                            active: isActive,
                            onClick: this.handleActiveChange.bind(this)
                        })
                    })
                }
            </div>
        )
    }
}
export default RadioGroup;
