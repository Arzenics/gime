import image8 from '../assets/img/image8.png'

const GameDetails = () => {
  return (
      <section id="detail">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" data-bs-theme="dark">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="./index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Resident Evil Village
                  </li>
                </ol>
              </nav>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src={image8} alt="" />
              </div>
              <div className="col-lg-8">
                <h1>Resident Evil Village</h1>
                <h2 className="cost mb-3">IDR 200.000</h2>
                <h6>about game</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                  repellendus at officiis minus culpa maxime voluptate porro, vel
                  similique ad architecto totam accusamus esse! Laudantium esse
                  saepe dolorem maiores doloremque!
                </p>
                <h6 className="mt-3">Spec Requirement</h6>
                <p><b>Reccommended :</b></p>
                <table>
                  <tr>
                    <th>Os</th>
                    <th>Proccessor</th>
                    <th>Memory</th>
                    <th>Graphic</th>
                  </tr>

                  <tr>
                    <td>Windows 10</td>
                    <td>Intel Core i5 / AMD Ryzen 5</td>
                    <td>16 GB RAM</td>
                    <td>AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070</td>
                  </tr>
                </table>
                <p className="mt-3"><b>Minimum :</b></p>
                <table>
                  <tr>
                    <th>Os</th>
                    <th>Proccessor</th>
                    <th>Memory</th>
                    <th>Graphic</th>
                  </tr>
                  <tr>
                    <td>Windows 10</td>
                    <td>Intel Core i3 / AMD Ryzen 3</td>
                    <td>8 GB RAM</td>
                    <td>Intel UHD Graphic 620 / AMD Radeon Graphic R9</td>
                  </tr>
                </table>

                <div className="trigger mt-5">
                  <div className="row">
                    <div className="col-lg-8">
                      <button type="button" className="btn buy" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy Now!
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button type="button" className="btn btn-outline-light" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="modal fade" data-bs-theme="dark" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button type="button" className="btn-close mb-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5>Login</h5>
                        <p className="text-secondary mb-5">
                          Login to download this game
                        </p>

                        <form action="">
                          <label for="username">Username</label>
                          <input type="text" className="form-control mb-3" placeholder="input username" />

                          <label for="password">Password</label>
                          <input type="password" className="form-control" placeholder="input password" />
                          <a href="./about-page.html" className="d-flex justify-content-end mt-3">Forgot password?</a>
                        </form>

                        <a href="./order-page.html" className="btn mt-5 mb-5">Login</a>
                        <p className="d-flex justify-content-center">
                          Don't have an account?
                          <a href="./signup-page.html">Sign Up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h5>Game Trailer</h5>
              <iframe 
              style={{borderRadius:'20px', 
              width:"100%",
              aspectRatio:16/9}}
                src="https://www.youtube.com/embed/dRpXEc-EJow?si=nGEhQvwhV0hq0hlH" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GameDetails