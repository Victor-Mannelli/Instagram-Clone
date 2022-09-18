export default function Header() {
    return (
        <header>
            <div>
                <ion-icon class="icon-insta" name="logo-instagram" />
                <img class="logo-insta" alt ="" src="./files/logo.png" /> 
            </div>
            <div class="search-bar"> 
                <ion-icon class="search-icon" name="search-outline" slot="start" /> 
                <input type="text" placeholder="Pesquisar" size="20" /> 
            </div>
            <div> 
                <ion-icon name="paper-plane-outline" />
                <ion-icon name="compass-outline" />
                <ion-icon name="heart-outline" />
                <ion-icon name="person-outline" />
            </div>
        </header>
    )
}