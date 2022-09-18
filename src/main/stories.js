export default function Stories(){
    return (
        <div class="stories-box">
            <StoriesProps image="./files/9gag.png" name="9gag" />
            <StoriesProps image="./files/meowed.png" name="meowed" />
            <StoriesProps image="./files/barked.png" name="barked" />
            <StoriesProps image="./files/strangeplanet.png" name="nathanwpylestrangeplanet" />
            <StoriesProps image="./files/wawa.png" name="wawawicomics" />
            <StoriesProps image="./files/respondeai.png" name="respondeai" />
            <StoriesProps image="./files/filomoderna.png" name="filomoderna" />
            <StoriesProps image="./files/memeriagourmet.png" name="memeriagourmet" />

            <div class="arrow"> <ion-icon name="chevron-forward-circle"></ion-icon> </div>
        </div>
    )
}
function StoriesProps(props){
    return (
        <div class="story">
            <div class="icon-image"> <img src={props.image} alt="" /> </div>
            <div class="icon-names"> {props.name} </div>
        </div>
    )
}
