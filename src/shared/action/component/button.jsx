// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) => (
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <button onClick={handleClick} className="btn btn-primary" type="button" role="button">
    {label}
  </button>
)

export default Button
