import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import Logo from "./component/Logo/Logo"
import Share from "./component/Share/Share"
import Feedback from "./component/Feedback/Feedback"
import "./style.css"
import Besttime from "./component/Besttime/Besttime"
import Progress from "./component/Progress/Progress"
import Review from "./component/Review/Review"
import Designers from "./component/Designers/Designers"
import Loop from "./component/Loop/Loop"
import RequestDemo from "./component/RequestDemo/RequestDemo"
import Footer from "./component/Footer/Footer"
import Animation from "./component/Animation/Animation"

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Home />
            <Logo />
            <Share />
            <Feedback />
            <Besttime />
            <Progress />
            <Review />
            <Designers />
            <Loop />
            <RequestDemo />
            <Footer />
 </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
