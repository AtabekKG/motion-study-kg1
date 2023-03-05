import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Study from "./components/Study/Study";
import Contact from "./components/Contact/Contact";
import SearchInput from "./components/Search-input/Search-input";
import Explore from "./components/Study/Explore/Explore";
import America from "./components/Study/Explore/America/America";
import Solbrige from "./components/Study/Explore/America/Solbrige/Solbrige";
import DiscoverMore from "./components/Home/Home-exams/Discover-more/Discover-more";
import Aptis from "./components/Home/Home-exams/Aptis/Aptis";
import Ielts from "./components/Home/Home-exams/Ielts/Ielts";
import OtherExams from "./components/Home/Home-exams/Other-exams/Other-exams";
import Loading from "./loading";
import {useEffect, useState} from "react";


function App() {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    return (
        <>

            <Loading load={load}/>


            <div className="App" style={{
                display: load ? 'none' : 'block'
            }}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/Home"} element={<Home/>}/>
                    <Route path={"/Discover-more"} element={<DiscoverMore/>}/>
                    <Route path={"/Aptis"} element={<Aptis/>}/>
                    <Route path={"/Ielts"} element={<Ielts/>}/>
                    <Route path={"/Other-exams"} element={<OtherExams/>}/>
                    <Route path={"/About"} element={<About/>}/>
                    <Route path={"/Study"} element={<Study/>}/>
                    <Route path={"/Explore"} element={<Explore/>}/>
                    <Route path={"/America"} element={<America/>}/>
                    <Route path={"/Solbrige"} element={<Solbrige/>}/>
                    <Route path={"/Contact"} element={<Contact/>}/>
                    <Route path={"/Search-input"} element={<SearchInput/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
