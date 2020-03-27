/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Text from 'components/Text'
import { TEXT_TYPE } from 'components/Text/constants'
import HeaderInfo from './HeaderInfo'
import { PrimaryButton } from 'components/Button'

import styles from './Form.styles.js'

class Form extends React.Component {
  static propTypes = {
    buttonLabel: PropTypes.string,
    description: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const {
      buttonLabel = 'Next',
      description,
      disabled,
      onSubmit,
      title,
    } = this.props
    return (
      <form onSubmit={this.onSubmit} css={styles.root}>
        <div css={styles.sections}>
          <HeaderInfo {...{ title, description }} />
          {this.props.children}
        </div>
        <PrimaryButton
          type="submit"
          onClick={onSubmit}
          disabled={disabled}
          css={styles.button}>
          <Text type={TEXT_TYPE.BODY_1}>{buttonLabel}</Text>
        </PrimaryButton>
      </form>
    )
  }
}

export default Form
