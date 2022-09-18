import User from "./user"
import Sugestions from "./sugestions"

export default function SideBar(){
    return (
        <div class="sidebar">   
            <User />
            <Sugestions />
            <div class="sidebar-footer"> 
                <p> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma </p>
                <p> © 2021 INSTAGRAM DO FACEBOOK </p>  
            </div>
        </div>
    )
}