import useAsyncEndpoint from 'component/api/UseAsyncEndpoint'

const meetingAPI = 'http://localhost:3000/meeting'

const useMeetingEndpoint = () => {
  const [newMeeting, postMeeting] = useAsyncEndpoint(data => ({
    url: meetingAPI,
    method: 'post',
    data
  }))

  const [meeting, getMeeting] = useAsyncEndpoint(meetingID => ({
      url: `${meetingAPI}/${meetingID}`,
      method: 'get'
    })
  )

  return {newMeeting, postMeeting, meeting, getMeeting}
}

export default useMeetingEndpoint
