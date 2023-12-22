import React from 'react'
import imageNews from '../assets/img/image-news.png'
import imageNews2 from '../assets/img/image-news2.png'
import imageNews3 from '../assets/img/image-news3.png'
import imageNews4 from '../assets/img/image-news4.png'

const News = () => {
  return (
    <>
    <section id="news">
        <div class="container mt-3">
        <div class="row">
            <div class="col-lg-4">
            <form class="d-flex" action="">
                <input type="search" class="form-control me-2" data-bs-theme="dark" placeholder="Search news"/>
                <button class="btn" type="submit">Search</button>
            </form>

            </div>
        </div>

        <div class="content-news mt-3">
            <div class="row">
            <div class="col-lg-6">
                <div class="card mt-3">
                <img src={imageNews} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6><small>Friday, 1 September 2023</small></h6>
                    <a href="./news-detail.html" class="card-title">
                    <h5>Modern Warfare III Release Date</h5>
                    </a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                    eius nam nemo hic impedit ea commodi.</p>
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-3">
                <img src={imageNews2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6><small>Friday, 1 September 2023</small></h6>
                    <a href="./news-detail.html" class="card-title">
                    <h5>EA Sports FC 24: cut to the chase</h5>
                    </a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                    eius nam nemo hic impedit ea commodi.</p>
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-3">
                <img src={imageNews3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6><small>Friday, 1 September 2023</small></h6>
                    <a href="./news-detail.html" class="card-title">
                    <h5>Resident Evil 4 PS5 Playthrough</h5>
                    </a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                    eius nam nemo hic impedit ea commodi.</p>
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-3">
                <img src={imageNews4} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6><small>Friday, 1 September 2023</small></h6>
                    <a href="./news-detail.html" class="card-title">
                    <h5>Konami Apologizes for eFootball’s Disastrous Launch</h5>
                    </a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                    eius nam nemo hic impedit ea commodi.</p>
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

export default News