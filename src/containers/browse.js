import React, { useContext, useState, useEffect } from 'react'
import { Loading } from '../components'
import { SelectionProfileContainer } from './profiles'
import { FirebaseContext } from '../context/Firebase'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectionProfileContainer user={user} setProfile={setProfile} />
  )
}
