export default function Sugestions() {

    const sugestions = [
        {profileTitle: "bad.vibes.memes", profileIcon: "./files/badvibesmemes.png"},
        {profileTitle: "chibirdart", profileIcon: "./files/chibirdart.png"},
        {profileTitle: "razoesparaacreditar", profileIcon: "./files/razoesparaacreditar.png"},
        {profileTitle: "adorableanimals", profileIcon: "./files/adorableanimals.png"},
        {profileTitle: "smallcutecats", profileIcon: "./files/smallcutecats.png"}
    ]

    return (
        <div class="sugestions-box">
            {sugestions.map((sugestion) => <SugestionsProps sugestion = {sugestion} />)}
        </div>
    )
}
function SugestionsProps({sugestion}){
    return (
        <div class="sugestion">
            <div class="row">
                <img class="sidebar-icons" src={sugestion.profileIcon} alt="" />
                <div>
                    <h2> {sugestion.profileTitle} </h2>
                    <h1> Segue você </h1>
                </div>
            </div>
            <div class="follow">Seguir</div>
        </div>
    )
}