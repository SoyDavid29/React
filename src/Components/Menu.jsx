export default function Menu({open}){
    return(
            <div className={`main-menu ${open ? "show" : ""}`}>
                <p>Firts Link</p>
                <p>Second Link</p>
                <p>Thrid Link</p>
            </div>
    )
}