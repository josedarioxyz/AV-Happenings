import React, { Component } from 'react'
import { Header, Icon, Modal, Statistic } from 'semantic-ui-react'

export default class UserModal extends Component {
  state = { modalOpen: false }

  _handleOpen = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { displayName, email, likeCount, eventCount } = this.props.user

    return (
      <Modal
        trigger={
          <a id='user-modal-trigger' onClick={this._handleOpen}>
            {displayName}
          </a>
        }
        open={this.state.modalOpen}
        onClose={this._handleClose}
        size='small'
      >
        <Header content={displayName} subheader={email} textAlign='center' />
        <Modal.Content>
          <Modal.Description>
            <Statistic.Group size='mini' widths={2}>
              <Statistic>
                <Statistic.Value>{likeCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='pink' name='heart' />Likes
                </Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{eventCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='teal' name='write' />Posted
                </Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <Header textAlign='center'>
              <Header.Subheader>
                Joined 4 months ago
              </Header.Subheader>
            </Header>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
