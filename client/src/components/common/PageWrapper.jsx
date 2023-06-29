import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppState } from "../../redux/features/appStateSlice"

const PageWrapper = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(setAppState)
    }, [])

  return (
    <div>Page/Wrapper</div>
  )
}

export default PageWrapper