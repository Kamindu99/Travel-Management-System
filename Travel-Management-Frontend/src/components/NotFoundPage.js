import Header from "./Header";
import Footer from "./Footer";
import './NotFound.css'

export default function NotFound() {
    return (
        <div>
            <Header />
            <div className="infotr">

                <div className="notfoundpage">
                    <body class="bg-purple">
                        <div class="stars">
                            <div class="central-body">
                            <h1 style={{color:'#857199',marginTop:'-3%',marginBottom:'2%'}}> Dream Travels Pvt. Ltd. Page Not Found </h1>
                                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
                                <a href="/" class="btn-go-home mt-5" style={{ width: '200px' }} target="_blank">GO BACK HOME</a>
                            </div>
                            <div class="objects">
                                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                                <div class="earth-moon">
                                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                                </div>
                                <div class="box_astronaut">
                                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
                                </div>
                            </div>
                            <div class="glowing_stars">
                                <div class="star"></div>
                                <div class="star"></div>
                                <div class="star"></div>
                                <div class="star"></div>
                                <div class="star"></div>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
            <Footer />
        </div>
    )
}