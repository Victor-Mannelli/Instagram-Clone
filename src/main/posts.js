import React from "react"

export default function Posts(){
    return (
        <div class="posts-box">
            <PostsProps 
                postIcon="./files/meowed.png"
                postTitle="meowed" 
                postImage="./files/cat-on-phone.png"  
                userLikeIcon="./files/respondeai.png" 
                userLikeUsername="respondeai" 
                otherPeopleLikes="101523" 
            />
            <PostsProps 
                postIcon="./files/barked.png" 
                postTitle="Barked" 
                postImage="./files/puppy.png" 
                userLikeIcon="./files/adorableanimals.png" 
                userLikeUsername="adorable_animals" 
                otherPeopleLikes="99159" 
            />
            <PostsProps 
                postIcon="./files/meowed.png"
                postTitle="Meowed" 
                postImage="./files/cat.jpg" 
                userLikeIcon="./files/barked.png" 
                userLikeUsername="barked" 
                otherPeopleLikes="159127"
            />
        </div>
    )
}
function PostsProps(props){

    const [Heart, setHeart] = React.useState(<ion-icon name="heart-outline"/>)
    const [Likes, setLikes] = React.useState(Number(props.otherPeopleLikes))

    return (
        <div class="post">
            <div class="post-title">
                <img class="post-icons" alt="" src={props.postIcon}/>
                <h2> {props.postTitle} </h2>
                <p>...</p>
            </div>
            <img onDoubleClick={() => {setHeart(<div class="red"><ion-icon name="heart"/></div>);}} class="img-post" alt="" src={props.postImage}/>
            <div class="reactions">
                <div>
                    <div class="reactions-icons-left">
                        <div onClick={() => {
                            (Heart.props.name === 'heart-outline') ? setHeart(<div class="red"><ion-icon name="heart"/></div>) : setHeart(<ion-icon name="heart-outline"/>);
                            (Heart.props.name === 'heart-outline') ? setLikes(Likes + 1) :  setLikes(Likes - 1);
                        }}> {Heart} </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="bookmark"><ion-icon name="bookmark-outline"/></div>
                </div>
                <div class="likes">
                    <div> <img class="likes-icon" alt="" src={props.userLikeIcon}/> </div>
                    <p> Curtido por <span> {props.userLikeUsername} </span> e <span> outras {Likes.toLocaleString()} pessoas </span> </p>
                </div>
            </div>
        </div>
    )
}
