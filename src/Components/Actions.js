import React, { memo } from 'react'
import ShareIcon from '../images/share.svg'
import CopyIcon from '../images/copy.svg'

const navigatorHasShare = navigator.share

function Actions({ repository }) {
  const { name, description, href } = repository;
  
  const shareInfo = () => {
    navigator.share({
      title: `Bitbucket - ${name}`,
      text: description,
      url: href
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(`*Link de acesso do repositório: ${name}* ${href}`)
    alert('Link de acesso do repositório copiado');
  }

  const renderActions = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo

    const icon = navigatorHasShare ? ShareIcon : CopyIcon

    return <a href="/#" onClick={action}><img alt="icon" width="26" src={icon} className="share-icon" /></a>
  }

  return (
    <div className="share">
      {renderActions()}
    </div>
  )
}

export default memo(Actions)