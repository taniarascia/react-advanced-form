import { useEffect } from 'react'

export const ConditionalField = ({ show, onCollapse, onShow, children }) => {
  useEffect(() => {
    if (show) {
      onShow()
    } else {
      onCollapse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return show ? children : null
}
