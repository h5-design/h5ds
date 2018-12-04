import React, { Component } from 'react'

export default Inner => {
  class HOC extends Component {
    render() {
      return (
        <div>
          This is HOC Demo!!!
          <Inner />
        </div>
      )
    }
  }
  return HOC
}

export function readonly (target, key, descriptor) {
  descriptor.writable = false
}
