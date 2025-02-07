import React, { useRef } from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'
sublinks
const Submenu = () => {
    const {pageId,setPageId}=useGlobalContext()
    const currentPage=sublinks.find((item)=>item.pageId==pageId);
const submenuContainer=useRef()
   
const handeSubmenu=(event)=>{
   const submenu=submenuContainer.current;
   const {left,right,bottom}=submenu.getBoundingClientRect();
//    console.log(result)
//    console.log(submenu)
   const {clientX,clientY}=event;
//    console.log(clientX,clientY)

        // setPageId(null)
        if(clientX < left-1 || clientX > right-1 || clientY > bottom-1 ){
            setPageId(null)
        }

      
}

  return (
    
    <div className={currentPage?'submenu show-submenu':'submenu '} ref={submenuContainer} onMouseLeave={handeSubmenu}>

        <h5>{currentPage?.page}</h5>

            <div className="submenu-links"  style={{
          gridTemplateColumns:
          currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}>

            {currentPage?.links?.map((link)=>{
            const {id,label,icon,url}=link;
            return <a key={id} href={url}>{icon}{label}</a>
              })}

            </div>
        

    </div>
  )
}

export default Submenu