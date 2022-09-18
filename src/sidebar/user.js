import react from "react"

export default function User() {


    const [UserName, setUserName] = react.useState("Catana")

    return (
        <div class="siderbar-header">
            <div class="sidebar-header-profile">
                <img class="catana-icon" alt="" src="./files/catanacomics.png" />
                <div class="sidebar-header-profile-textbox">
                    <h4> catanacomics </h4>
                    <h1> {UserName} <span onClick={() => setUserName(prompt('Qual o seu nick?'))}><ion-icon name="pencil"/></span></h1>
                </div>
            </div>
            <div class="sidebar-header-subtitle">
                <h5> Sugestões para você </h5>
                <h6> Ver tudo </h6>
            </div>
        </div>
    )
}

function setUserName(){

}