import * as React from 'react'

type LinkProps = {
    active: boolean,
    children: any,
    onClick: () => any
}

const Link = (props: LinkProps) => {
  if (props.active) {
    return <span>{props.children}</span>
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        props.onClick()
      }}
    >
      {props.children}
    </a>
  )
}

export default Link