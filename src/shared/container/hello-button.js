// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../action/component/button'

const mapStateToProps = () => ({
  label: 'Say hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
