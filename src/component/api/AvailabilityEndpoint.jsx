import useAsyncEndpoint from 'component/api/UseAsyncEndpoint'


const useAvailabilityEndpoint = () => {
  const [newAvailability, postAvailability] = useAsyncEndpoint(({meetingID, data}) => {
    const availabilityAPI = `http://localhost:3000/meeting/${meetingID}/availability`

    return ({
      url: availabilityAPI,
      method: 'post',
      data
    })
  })
  return {newAvailability, postAvailability}
}

export default useAvailabilityEndpoint
