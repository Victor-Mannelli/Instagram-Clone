import React from "react"

export default function Posts() {

    const PostsInfo = [{
        postIcon: "./files/meowed.png",
        postTitle: "meowed",
        postImage: "./files/cat-on-phone.png",
        userLikeIcon: "./files/respondeai.png",
        userLikeUsername: "respondeai",
        otherPeopleLikes: "101523"
    },
{
        postIcon: "./files/barked.png",
        postTitle: "Barked",
        postImage: "./files/puppy.png",
        userLikeIcon: "./files/adorableanimals.png",
        userLikeUsername: "adorable_animals",
        otherPeopleLikes: "99159"
    },
{
        postIcon: "./files/meowed.png",
        postTitle: "Meowed",
        postImage: "./files/cat.jpg",
        userLikeIcon: "./files/barked.png",
        userLikeUsername: "barked",
        otherPeopleLikes: "159127"
    }]

    return (
        <div class="posts-box">
            {PostsInfo.map(post => <PostsProps post = {post} />)}
        </div>
    )
}
function PostsProps({post}) {

    const [Heart, setHeart] = React.useState(<ion-icon name="heart-outline" />)
    const [Likes, setLikes] = React.useState(Number(post.otherPeopleLikes))
    const [Bookmark, setBookmark] = React.useState("bookmark-outline")

    return (
        <div class="post">
            <div class="post-title">
                <img class="post-icons" alt="" src={post.postIcon} />
                <h2> {post.postTitle} </h2>
                <p>...</p>
            </div>
            <img onDoubleClick={() => { setHeart(<div class="red"><ion-icon name="heart" /></div>); 
                (Heart.props.name === 'heart-outline') ? setLikes(Likes + 1) : setLikes(Likes);
            }} class="img-post" alt="" src={post.postImage} />
            <div class="reactions">
                <div>
                    <div class="reactions-icons-left">
                        <div onClick={() => {
                            (Heart.props.name === 'heart-outline') ? setHeart(<div class="red"><ion-icon name="heart" /></div>) : setHeart(<ion-icon name="heart-outline" />);
                            (Heart.props.name === 'heart-outline') ? setLikes(Likes + 1) : setLikes(Likes - 1);
                        }}> {Heart} </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={() => {
                        Bookmark === "bookmark-outline" ? setBookmark('bookmark') : setBookmark("bookmark-outline")
                    }} class="bookmark"><ion-icon name={Bookmark} /></div>
                </div>
                <div class="likes">
                    <div> <img class="likes-icon" alt="" src={post.userLikeIcon} /> </div>
                    <p> Curtido por <span> {post.userLikeUsername} </span> e <span> outras {Likes.toLocaleString()} pessoas </span> </p>
                </div>
            </div>
        </div>
    )
}
