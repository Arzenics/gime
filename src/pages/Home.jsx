import React from 'react'
import slide1 from '../assets/img/slide1.png';
import slide2 from '../assets/img/slide2.png';
import slide3 from '../assets/img/slide3.png';
import image4 from '../assets/img/image4.png';
import image5 from '../assets/img/image5.png';
import image6 from '../assets/img/image6.png';
import image7 from '../assets/img/image7.png';
import image8 from '../assets/img/image8.png';
import image9 from '../assets/img/image9.png';
import image10 from '../assets/img/image10.png';
import image11 from '../assets/img/image11.png';
import image12 from '../assets/img/image12.png';
import image13 from '../assets/img/image13.png';
import image14 from '../assets/img/image14.png';
import image15 from '../assets/img/image15.png';
import image16 from '../assets/img/image16.png';
import image17 from '../assets/img/image17.png';
import imageNews from '../assets/img/image-news.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <section id="hero">
            <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3">
                <form action="">
                    <input type="search" className="form-control" placeholder="Search Game" data-bs-theme="dark" />
                </form>
                </div>
                <div className="col-lg-9">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-discover-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-discover" type="button" role="tab" aria-controls="pills-discover"
                        aria-selected="true">
                        Discover
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular"
                        type="button" role="tab" aria-controls="pills-popular" aria-selected="false">
                        Popular
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-discover" role="tabpanel"
                    aria-labelledby="pills-discover-tab" tabindex="0">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5><b>Hitman III : Death Awaits</b></h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing.
                            </p>
                            <Link to='/detail/:id' className="btn btn-outline-light">Buy Now!</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5><b>Forza Horizon 5</b></h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing.
                            </p>
                            <Link to='/detail/:id' className="btn btn-outline-light">Buy Now!</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <h5><b>EA Sport : FC 24</b></h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing.
                            </p>
                            <Link to='/detail/:id' className="btn btn-outline-light">Buy Now!</Link>
                            </div>
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="onsale mt-5">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="subtitle">on sale</h6>
                                <Link to='/detail/:id' className="game-title">
                                <h5>Resident Evil 4</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="subtitle">on sale</h6>
                                <Link to='/detail/:id' className="game-title">
                                <h5>The Last Of Us Part II</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="subtitle">on sale</h6>
                                <Link to='/detail/:id' className="game-title">
                                <h5>Dying Light 2</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="reccommended mt-5">
                        <div className="row">
                        <h5>Reccommended Games</h5>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image7} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Ghost Of Tsushima</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image8} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Resident Evil : Village</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image9} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>APEX Legends</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image10} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>WWE 2K23</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="feature mt-5">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image11} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to="./sales-page.html">
                                <h5 className="card-title">Sales & Special</h5>
                                </Link>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nesciunt, minima?
                                </p>
                                <Link to="./sales-page.html">
                                <h4>Browse</h4>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image12} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to="./freegame-page.html">
                                <h5 className="card-title">Free Games</h5>
                                </Link>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nesciunt, minima?
                                </p>
                                <Link to="./freegame-page.html">
                                <h4>Play Now</h4>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                            <img src={image13} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to="./news-page.html">
                                <h5 className="card-title">Game News</h5>
                                </Link>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nesciunt, minima?
                                </p>
                                <Link to="./news-page.html">
                                <h4>Browse</h4>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab"
                    tabindex="0">
                    <div className="reccommended">
                        <div className="row">
                        <h5>Reccommended Games</h5>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image7} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Ghost Of Tsushima</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image8} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Resident Evil : Village</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image9} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>APEX Legends</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image10} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>WWE 2K23</h5>
                                </Link>
                                <h4 className="cost">IDR 200.000</h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="popular-news mt-5">
                        <div className="row">
                        <div className="col">
                            <div className="card mb-3 bg-dark" data-bs-theme="dark">
                            <div className="row g-0">
                                <div className="col-md-6">
                                <img src={imageNews} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                <div className="card-body">
                                    <h6 className="subtitle">popular news</h6>
                                    <h3 className="card-title"><b>Modern Warfare III Release Date</b></h3>
                                    <p className="card-text">Modern Warfare III is currently scheduled to release on Friday,
                                    November 10th, 2023. The game will release on the following platforms: PS4/5, Xbox X|S +
                                    Xbox One, PC, Battle.net, Steam. This all-new campaign continues the story immediately
                                    following the events of Modern Warfare II, with Makarov taking center stage and causing
                                    Task Force 141 to fight like never before. With a full-length story, you'll enjoy the
                                    usual cinematic firefights the series is known for, as well as brand new Open Combat
                                    Missions, giving players a more free-form experience than ever before.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    <Link to="./news-detail.html">
                                    <h5>Read More</h5>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="free-games mt-5">
                        <div className="row">
                        <h5>Top Free Games</h5>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image14} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Asphalt 9 Legends</h5>
                                </Link>
                                <h4 className="cost">Free</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image15} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>League Of Legends</h5>
                                </Link>
                                <h4 className="cost">Free</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image16} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Warriors Orochi 4</h5>
                                </Link>
                                <h4 className="cost">Free</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card mt-3">
                            <img src={image17} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to='/detail/:id' className="game-title">
                                <h5>Efootball 2023</h5>
                                </Link>
                                <h4 className="cost">Free</h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Home