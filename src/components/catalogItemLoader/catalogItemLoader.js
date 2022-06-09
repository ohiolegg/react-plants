import React from "react"
import ContentLoader from "react-content-loader"

const CatalogItemLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={620}
    viewBox="0 0 260 620"
    backgroundColor="#ddeedd"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" /> 
    <circle cx="132" cy="164" r="131" /> 
    <rect x="2" y="343" rx="0" ry="0" width="254" height="25" /> 
    <rect x="0" y="394" rx="0" ry="0" width="255" height="72" /> 
    <rect x="3" y="505" rx="0" ry="0" width="117" height="42" /> 
    <rect x="201" y="516" rx="0" ry="0" width="56" height="21" /> 
    <rect x="1" y="158" rx="0" ry="0" width="260" height="155" />
  </ContentLoader>
)

export default CatalogItemLoader