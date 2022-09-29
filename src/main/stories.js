export default function Stories(){

    const story = 
        [
            {image: "./files/9gag.png", name: "9gag" },
            {image: "./files/meowed.png", name: "meowed"},
            {image: "./files/barked.png", name: "barked"},
            {image: "./files/strangeplanet.png", name: "nathanwpylestrangeplanet"},
            {image: "./files/wawa.png", name: "wawawicomics"},
            {image: "./files/respondeai.png", name: "respondeai"},
            {image: "./files/filomoderna.png", name: "filomoderna"},
            {image: "./files/memeriagourmet.png", name: "memeriagourmet"}
        ]

    return (
        <div class="stories-box">
            {story.map((story) => <StoriesProps story = {story}/> )}
            <div class="arrow"> <ion-icon name="chevron-forward-circle"></ion-icon> </div>
        </div>
    )
}
function StoriesProps({story}){
    return (
        <div class="story">
            <div class="icon-image"> <img src={story.image} alt="" /> </div>
            <div class="icon-names"> {story.name} </div>
        </div>
    )
}
