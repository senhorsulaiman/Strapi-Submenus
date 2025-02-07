import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {

  const {isSidebarOpen,closeSidebar}=useGlobalContext()
  return (
    <aside className={isSidebarOpen?'sidebar show-sidebar ':'sidebar '}>
        <div className="sidebar-container ">

          <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>

          {sublinks.map((sublink)=>{
            const { pageId,page,links}=sublink;
            return(
            <article className='article' key={pageId}>

            <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link)=>{
                  return(   <a className='' key={link.id} href={link.url}> {link.icon} {link.label}</a>)
                })}
              
              </div>
            </article>)


          })}
        
        </div>
  





    </aside>
  )
}

export default Sidebar