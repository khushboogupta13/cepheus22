import "./NavElem.css"

const NavElem=(props)=>{
  return(
    <a href={`#${props.link}`} onClick={props.onClick}><span className={props.id}>{props.elem}</span></a>
  )
}


export default NavElem;