import * as React from "react"
import { FC, MouseEventHandler, ReactNode } from "react"

interface inIco {
  children: ReactNode
  ExtraComponent?: () => JSX.Element
  m?: string
  eventListener?: MouseEventHandler<HTMLElement> | undefined
}

const Ico: FC<inIco> = ({ children, ExtraComponent, m = "0 0 0 0", eventListener }) => {
  return (
    <>
      <i className="material-icons" data-testid="i" style={{ margin: m }} onClick={eventListener}>
        {children}
      </i>
      {ExtraComponent && <ExtraComponent />}
    </>
  )
}

export default Ico
