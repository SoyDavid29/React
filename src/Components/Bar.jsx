export default function Bar({toggleMenu}){

   return(

        <div className="sidebar">
         <h1>David</h1>
         <ul className="links">
           <li>About us</li>
           <li>Contact</li>
           <button onClick={toggleMenu} className="btn-menu">Menu</button>
         </ul>
        </div>
   )

 
}
