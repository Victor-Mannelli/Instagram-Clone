import react from "react"

export default function User() {
    return (
        <UserProps UserNickName="Catanacomics"/>
    )
}

function UserProps(props){
    const [ProfilePicture, setProfilePicture] = react.useState("./files/catanacomics.png")
    const [UserName, setUserName] = react.useState("Catana")

    return (
        <div class="siderbar-header">
            <div class="sidebar-header-profile">
                <img onClick={() =>{
                    if (prompt('Insira o link da imagem') !== ""){
                        setProfilePicture(prompt('Insira o link da imagem'))
                    }
                }} class="catana-icon" alt="" src={ProfilePicture} />
                <div class="sidebar-header-profile-textbox">
                    <h4> {props.UserNickName} </h4>
                    <h1> {UserName} <span onClick={() => setUserName(prompt('Insira o novo nome'))}><ion-icon name="pencil"/></span></h1>
                </div>
            </div>
            <div class="sidebar-header-subtitle">
                <h5> Sugestões para você </h5>
                <h6> Ver tudo </h6>
            </div>
        </div>
    )
}