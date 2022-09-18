import ReactDOM from "react-dom"

import Header from "./header"
import HeaderMobile from "./header-mobile"
import Main from "./main/main"
import Footer from "./footer"

function App(){
    return (
        <div>   
            <Header />
            <HeaderMobile />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))