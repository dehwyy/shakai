import * as React from "react"
import { FC, ReactNode } from "react"

interface inIco {
  children: ReactNode
  ExtraComponent?: () => JSX.Element
  m?: string
}

const Ico: FC<inIco> = ({ children, ExtraComponent, m = "0 0 0 0" }) => {
  return (
    <>
      <i
        className="material-icons"
        data-testid="i"
        style={{ margin: m }}
      >
        {children}
      </i>
      {ExtraComponent && <ExtraComponent />}
    </>
  )
}

export default Ico
