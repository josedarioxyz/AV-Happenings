import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'

import { userAuth } from '../Firebase'
import NavButton from '../components/NavButton'

class NavModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleLogOut = this._handleLogOut.bind(this)
  }

  _handleOpen = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  _handleLogOut = () => userAuth.signOut()

  render() {
    const { _handleOpen, _handleClose, _handleLogOut } = this
    const { modalOpen } = this.state
    const { _loggedIn } = this.props

    return (
      <Modal
        trigger={
          <Button
            aria-label='navigation trigger'
            floated='right'
            icon='bars'
            inverted
            onClick={_handleOpen}
          />
        }
        onClose={_handleClose}
        open={modalOpen}
        basic
        size='small'
      >
        <Modal.Content onClick={_handleClose}>
          <NavButton attached='top' content='Home' to='/' />
          {
            _loggedIn ?
            <React.Fragment>
              <NavButton content='Log Out' logOut={_handleLogOut} to='/' />
              <NavButton content='Submit' to='/submit' />
            </React.Fragment> :
            <React.Fragment>
              <NavButton content='Log In' to='/login' />
              <NavButton content='Sign Up' to='/signup' />
            </React.Fragment>
          }
          <NavButton content='Help' to='/help' />
          <NavButton attached='bottom' content='About' to='/about' />
        </Modal.Content>
      </Modal>
    )
  }
}

NavModal.propTypes = {
  _loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({ _loggedIn: state.user.loggedIn })

export default connect(mapStateToProps, null)(NavModal)
