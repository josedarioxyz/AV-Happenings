import React from 'react'
import {
  Container,
  Divider,
  Header as Heading,
  Message,
  Segment
} from 'semantic-ui-react'

import SubmitForm from '../containers/SubmitForm'

const SubmitPage = () =>
  <Container text>
    <Divider hidden />
    <Segment attached='top'>
      <Heading as='h2' textAlign='center'>Submit</Heading>
      <SubmitForm />
    </Segment>
    <Message attached='bottom' color='orange'>
      <center>Please be mindful of the content rules.</center>
    </Message>
  </Container>

export default SubmitPage
