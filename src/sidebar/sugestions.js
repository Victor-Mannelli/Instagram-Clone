export default function Sugestions() {
    return (
        <div class="sugestions-box">
            <SugestionsProps profileTitle="bad.vibes.memes" profileIcon="./files/badvibesmemes.png"/>
            <SugestionsProps profileTitle="chibirdart" profileIcon="./files/chibirdart.png"/>
            <SugestionsProps profileTitle="razoesparaacreditar" profileIcon="./files/razoesparaacreditar.png"/>
            <SugestionsProps profileTitle="adorableanimals" profileIcon="./files/adorableanimals.png"/>
            <SugestionsProps profileTitle="smallcutecats" profileIcon="./files/smallcutecats.png"/>
        </div>
    )
}
function SugestionsProps(props){
    return (
        <div class="sugestion">
            <div class="row">
                <img class="sidebar-icons" src={props.profileIcon} alt="" />
                <div>
                    <h2> {props.profileTitle} </h2>
                    <h1> Segue você </h1>
                </div>
            </div>
            <div class="follow">Seguir</div>
        </div>
    )
}