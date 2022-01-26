import { useEffect } from 'react'

export const ConditionalField = ({
  collapsed,
  onCollapse,
  onShow,
  children,
}) => {
  useEffect(() => {
    if (collapsed) {
      onCollapse()
    } else {
      onShow()
    }
  }, [collapsed])

  return collapsed ? null : children
}
