import Menu from "./Menu"

export default function Bar({toggleMenu, open}){


   return(

        <div className="sidebar">
          <div className="sidebar-elements">
           <h1>David</h1>
           <ul className="links">
           <li>About us</li>
           <li>Contact</li>
           <button onClick={toggleMenu} className="btn-menu">Menu</button>
           </ul>
          </div>
          {open && <Menu />}

          {/* another option could have been */}

          {/* <div className={`main-menu ${open ? "show" : ""}`}>
            <p>Firts Link</p>
            <p>Second Link</p>
            <p>Thrid Link</p>
           </div> */}

        </div>
   )

 3
}
