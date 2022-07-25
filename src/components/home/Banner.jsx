import "../../assets/scss/banner.scss";



const Banner = () => {
    
    return (
      <div className="container-fluid">
        <div className="carousel">
          <input
            type="radio"
            id="carousel-1"
            name="carousel[]"
            defaultChecked
          />
          <input type="radio" id="carousel-2" name="carousel[]" />
          <input type="radio" id="carousel-3" name="carousel[]" />

          <ul className="carousel__items">
            <li className="carousel__item">
              <img
                src="https://shorelineobx.com/wp-content/uploads/2020/07/Outer-Banks-spas-1500x609-1.jpg"
                alt=""
              />
              <div className="content">
                <h1>MAY Spa</h1>
                <h2>KHÁM PHÁ THẾ GỚI SPA</h2>
                <h5>
                  Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ
                  thuật
                </h5>
              </div>
            </li>
            <li className="carousel__item">
              <img
                src="https://fastly.4sqi.net/img/general/1398x536/47988555_ftYIwykRuPZp_met1jGuwkpQEkuPczWPi9glaxP8B1c.jpg"
                alt=""
              />
            </li>
            <li className="carousel__item">
              <img
                src="https://www.grandebayresort.in/img/spa-banner.png"
                alt=""
              />
            </li>
          </ul>
          <div className="carousel__prev">
            <label htmlFor="carousel-1" />
            <label htmlFor="carousel-2" />
            <label htmlFor="carousel-3" />
          </div>
          <div className="carousel__next">
            <label htmlFor="carousel-1" />
            <label htmlFor="carousel-2" />
            <label htmlFor="carousel-3" />
          </div>
          <div className="carousel__nav">
            <label htmlFor="carousel-1" />
            <label htmlFor="carousel-2" />
            <label htmlFor="carousel-3" />
          </div>
        </div>
      </div>
    );
}
export default Banner