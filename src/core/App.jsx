import React, { Component } from 'react'
import HOC, { readonly } from '../proposal/decorators'

@HOC
class EDH5 extends Component {
  render() {
    return (
      <div className="test">
        <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3539442437,3185335742&fm=58&bpow=600&bpoh=443" />
      </div>
    )
  }
}

class A {
  @readonly
  a = `this key can't be overwrite`
}

console.log(window.a = new A())

export default EDH5
