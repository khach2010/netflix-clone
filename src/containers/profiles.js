import React from 'react'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectionProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's is watching 1</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
