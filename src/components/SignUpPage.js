import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Divider,
  Header as Heading,
  Message,
  Segment
} from 'semantic-ui-react'

import SignUpForm from '../containers/SignUpForm'

const SignUpPage = () =>
  <Container text>
    <div>
    <Container text>
      <Divider hidden />
      <Segment attached='top'>
        <Heading
          as='h2'
          content='Sign Up'
          subheader='Wohoo! Glad you decided to join us! :)'
        />
        <SignUpForm />
      </Segment>
      <Message attached='bottom' color='orange'>
        <center>Have an account? <Link to='/login'>Log In</Link></center>
      </Message>
    </Container>
    </div>
  </Container>

export default SignUpPage
