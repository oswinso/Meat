import useAsyncEndpoint from 'component/api/UseAsyncEndpoint'

const meetingAPi = 'localhost:3030'

const useMeetingEndpoint = () => {
  return useAsyncEndpoint(data => ({
    url: meetingAPi,
    method: "POST",
    data
  }))
}

export default useMeetingEndpoint
