import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { CreateBlog, DetailBlog } from "..";
import { Footer, Header } from "../../components";
import './mainApp.scss'

export default function MainApp() {
    return (
        <div>
            <div className="main-app-wrapper">
                <Header />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/create-blog" Component={CreateBlog} />
                        <Route path="/detail-blog" Component={DetailBlog} />
                        <Route path="/" Component={Home} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    )
}
