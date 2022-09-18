import Stories from "./stories"
import Posts from "./posts"
import SideBar from "../sidebar/sidebar"

export default function Main(){
    return (
        <main>   
            <div class="insta-page">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </main>
    )
}