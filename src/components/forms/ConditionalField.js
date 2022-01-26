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
  }, [collapsed, onCollapse, onShow])

  return collapsed ? null : children
}
