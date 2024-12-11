export default function ButtonComponent({children, command}){
    return(
     <button class="Buttons" onClick={command}>{children}</button>
    )
 }