import React from 'react';
import {Link} from 'react-router-dom';

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselImages: ["https://www.planwallpaper.com/static/images/3865967-wallpaper-full-hd_XNgM7er.jpg",
             "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDw8NEBIQDw0PDQ0PDQ8PDxAPDg0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OFQ8QGiseHR0rKystKzctLSstListLSsrMisuLS0tKy8rNzE3Ky4rKystKy0rKy8yKy4tKy0rKysrK//AABEIALEBHQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgMABQQGB//EADkQAAIBAgIHBgQFAwUBAAAAAAABAgMRBBIFITFBUWFxBhOBkaHwFEKx0SIyYsHxFSNSFoKSorIH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAQACAgIBAwQCAwAAAAAAAAABEgIRAwQhMUFRExQiQhVhBaHw/9oADAMBAAIRAxEAPwD6yKKKJoxKxgcFnp0KojqIyiOoBYqFUQ2KKIcorHROwcpRRCohYUTymylcocoWFEsocpXKHKOxVSyhylcocoWTVHKHKVymsPZVSygylrAsPZVSygylQD2mqWUFitgNBsqpNAaKNAaHsqpNAsUaFaHsqpsDHYrDZaIYLAPYqBgADZVZisYDHsqpyJtFZE2Fiq9MCsSUCqOGz16KRQ6QiGCxVOERBFYaOhkTQyCxaPcKYiCOxaOmG4qDYdi0a5gII7FoQGMOyasBhsaw7FUoBrAsOxVKxWO0K0Fk1IwMZoVodhUrFYzQrQWKpWKxmhWgsVSNitjMVjsKlbAZisLJqa4LitguOxVZk2O2TbHYVeqJWLIRZWJ51nrTCqCIhkOyNGQyFSHSFYmQyMkMkF0shkZIZIdksgmMOxCYwR2JjXMYdg1zGAOwG4LgAFj0LYrZmBsdhoGxWwtisLHUGxWwtCSQ7FQGxWzNCtBYqA2I2FiMdhQGxGwyFYWKgNguBitjsmhmxGzXFbHYqPXBFoojAvFHm2d+SiQyQEPFBZnIpDJBSHQrImQSGSGSCkOyJkEg2GsYdi2FjWGMOwLYwbmuOwAxrgKsGMYDHY2uK2ZisLKiBuJJhEmFlRD5XSHbvDUqkqSjVq5JOMp04wyZk7NJykrnc0VpOniaUa1J3g7rWrSjJbYtbmfjvarRNTB4l0mnKFWTeGlFX72Llqhzkm0rc+Z+mditETwmEjTqP+9Obq1EtkG0koeCSvzud/Y4uHDixywnzP8Athw58mWeUZR4h9FcVgbFbOHbriBYjZmxGx2VVmybYWI2OwoDYjYWxGwsVGbEZpSEbHYqGbFbFbFuVsqOjTZeMjyU2XgzzdtcoeiMikWRiykWKcmUwtFjxJxZWIrMpOkOogiOh2ZzLKIcoUEqydlymsMKx2AWBYzFbHY4FoUDYjY7LiDtitnzHavtWsFKnSUO8qTi5tOWSMYXstdndtp+RXsx2jjjoTaj3dSm4qcM2ZWlfLJOy4PyN/o8scf1dfj8iMsbV35fQNitiOQrkZWaxidsSTFchHIe1RilisHCpKnKcU5UaneU20nlnlcbrwkyorkI5j20jFRyJuQjmefFYqFOLnOUYQW2UnZIa4x95ehzFcjhf6owzaipTleThHLTdpSSu0r23HpwWmKFaypVIyk45lF6pOPFJ7fAucM49YkseTjynUZQ6bkI5CZxXITapnIm5AcibYxUzYjYrZOUiiqdyBmJOQMxUJnF1KaPTCLJ0memDPL2jORjEtGIIstBkzLDLKWjEtGIYMvAW2GWRIwKRgViisYgwyzQUQ5T0ZTND2i7zOIjieloSSHtcZPO0I0WkTkPbSJSYkkUkxGyttYfI9vOzTxlHvKWrFUYydPhVhtdN8+D49T19kuz6wNDJfNWnaVee5ztqiv0rX6vefQNiNm/1+SeOOLf4qjGN215KxGNJk2yYaxAMVmchHIqGkQzEkzOROUitNIgJM+F7XVJ1cXGivyUYRkotpRdRpvM7+HkfY4vFRpxlUnJQhFXlKTskj887Taaw9eqqlJzvkyVHlSUsrvGSV78b3tsR2dPjmcpnXjXq5e9OuPW/Pwejg66jhdVKThKbrSzRdm98HxIw0fOEs6tTlTrznSlCpe0Za7u/OzsePvYOKWduXeSV1FJQk4K+pyV9XC+o9uia/xVWnhoKaTipVG4qPd0U7Nuz1N7uqO2McI/L/veXl4xnlMRrzL9Eo1M8IT2Z4QlbhdJ2CwJ21LUkrJcFwFlI8zT6aIlmIwSmTlUKjE9CxGLKoTlUKjFMnYjJuoI6hcYpl3adZHphWR87DE815otHEvj6nmTw5Ly6230cayLQrI+bjiXxKwxMjHLjyhjl1X08KyPRTrI+YhiZF6eKkZTGUOfPqS+ohUR6IM+ZpYuR09HY38ccztG+tvcZxMzlGPpuXFy9acYmXaUHwJz1HL7T9qI4OUKaip1JQzvM7RjG7S67GcbR3bL4uo6OVRnGDmnFtqSTSad9m09Dt9bj48Z+nlMzj6+PDPj6fNlhHLr8Z/t9POZCdY5VTFyPPPFSODHLKXRh1ZdeVYlKsceWKkSlipG2OOUujHqy7Eq5OVdHHeKkI8TI2x4sm0dV2HXJuucp4lg79m2PDkuOs6brk3XOc6zEddm0cErjh06LrCOsc94hnnr6RjD80knw2vyRrj18p9BMYY+Zl1nWJyqnDlpuH6n0j9yM9O8IvxaRvj0uSfZlPZ4Mf2eD/6LiJqlQS1wdaWaO6UlB5V/68j4Z1p7I0Ixlum1Uduf4nY+00xX+KpSoTyxjKzi1fNCa1xknyZ+cY9TpzlSqyqOUflu3GS3NO+zeenwcM4YRjLyezz4Zck5Y+kvXObnONOH9yrKSSVN3TqOLitfR+nI/UOzOiY4Ojk1OrOzrT4ytqjH9K2Lz3nwXZvRmRRxE80Kl1KioTlBwjxk09d+D1W6n0z0xUStdPm1r9BcvVyyjWPoXV7PFxTOWUefZ9ZLEcyM8SfIVNK1X89ukY/Y0dMz+ZJ81qZj9hlDs/leOfl9TLFEpYo+Zlpnk/oaOlL77dfuP7PKPYfyPHPpL6GWLJyxZw3iZPXfyEdeQ46qZ70O28WI8WcV12Sljkt68NZUdZnPdj5e6GPlxPRDSL4nEU+ZSM1xNZ6+PwnDu8ke7urSniUhpTocFVEUjURll1cPh049/k+X0dPSx6aWl5bvXWfMRrFFiH0OfLp4T7N8e5M+r6+lpaS2teKRRaee63Wx8csQy0a5hP8AjuOfZf3HHP6w9/a2c8RTVWMv7tKL/DsU6e1x5Na2vEl2SzYaDrys61aK1PX3dPao9Xqb8OBD4hg+IZtj1MaU14Z5djHf9fHs+oWn77Ul0Ta+ostM8HHyPlnVMqoo/wAdxR6Qj7qI9ofTPTK3peFzy19OP5YrrK/0TOI6wHUNselxx7M8u3l7PViNKVZbZNLhH8P0Iw0lWi9U30l+JepCTuKzqx4MNa1Dly7Ge97l06en5/NFPnH7Flp5cLPnF6jiMVj+14/hP3vNH7O7/Xl/jm6PL9Tz1tNzf5Yxj1/EzkoJcdbjj2Z5d7mnxZerjakts5dE7LyRC7NcDZtHHEekOXLmyn1kLsDuNmBmLjFlOZTyYzBxqSpylCEsraea/wCTbq4u6W3metyFcx1iUWLIjIpKROTK0mZTkibRVsRhpO0mhGhpVoL5o/8AJA72L2OL/wByAbCE3HY7DTxM3vt0SQjkuK80SlioL5l4axagWk0rvbd9QWJvGQ4+jB8bDn5D8F5euLHiRTHUjHTujJZMZSIqfMPeLiyZxaRm9KmMpnkVVcwqquLJqqOR7o1B1VOXLGRWr6axfi1+omsL+rLr96HvDj/HS3JeOsZY+XCI4xgp5JdbObMzlPHy4LwMsc+HqytQic3XU2HMcd43r5mWOa2eruPSby7KkG5xXpCfL1+4vx0+JWkzk7dwNnElipvU5P6EmxomXcnXitsl+5GWPgv8n0RyM5nIaZdR6Qjwl6A/qEeEvQ5lwOTKROnRlpBbo+bEekVwS8W/2ObJsSSfMaJdN6RXD1f2FekY8GcszYbS6P8AUP0+pOekH/ivO54lHwM48w2SssZJ/M10seecm9rb6u4ZQ5gy6/dwBLAcSuVcWBave0Q2llNlDN+QHIAFjWCponJ3APeqwXieB5V72BRDfa/xLN8QyKGQjsr3zBmb5k8zCnYNHZVQC1YjcLFo7HvvDEVfT0Dd7R6FlVcDFU/ILmuQ9FYVrGy9BO/Wz6XB3nBPx2j0myrjxaMpJcya1hS9seisrGsuHkFzT1bPMhm12WzeaLafIC2rO3vaTlIDfEXNtVlq4jLY3Nm6i5n72A1cdYy22e271D3wu3gFe9gJK5XF1roM2vvwEd/ACFTG7zVay1b95LNE2ZJX2CBrvqhHdMyl4+Arlu1p9AApcfogTbRs/vgK5cwBcxkgp8LdQuoBFaNbqHMt7GjP2wBm+TNmJZuYymQ1UUh1NcyGbmgZgPb0ZkHPrv8AsQzGU/4AbW7z3sDn9TzqXL1Dm4/uA29HeW6ddRnPf9Dzd7/O8LncBt6XNe0FdTyqW6+rle4+dLel6jLb0XBm5EHJbb9ORlUXNgW15VFuNGb37CCmtlnrH1cX4DLaql7vqM5kMwtST43432jG3odTVbb0JufEmpeBoyXICVlLwFzitoGYNkeU+AuZ8f5FcjZhbBu8S6hdRvl4/sScuhnLoGwNvHnssPne+z4X3E1MDlwDYM5PiKxe8A5PcLYNewq1g2bdvFhuAa6Ml5dRvFAUkt/oAK7e7mSM2uP/AFYry8X5P7hsNAeZjEtCyMjGACxpGMMNApLYAwgD2DPYgGGCSCtgTAR6ZjGGBQHvMYZC/sSqbQmERDL7GMAemp9/2IhMALLcBBMBA9wr3mMATGRjCAsz2oxhgN4Z7PExhAlPaWMYcBOQrCYRv//Z", 
             "https://wallpapertag.com/wallpaper/full/4/2/4/267883-vertical-wallpapers-hd-3840x2160-for-1080p.jpg"]
        }
    }

    render() {
        return (
            <div className="container-fluid manga-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col l8 s12">
                            <div className="row">
                                <div className="col s12">
                                    {this.renderCarousel()}
                                </div>
                            </div>
                        </div>
                        <div className="col l4 s12 manga-side-container">
                            <div className="row">
                                <div className="col s12">
                                    {/**use data-image-source for setting images */}
                                    {/* <div id="manga-img">
                            
                                    </div> */}
                                </div>
                                <div className="col s12">
                                    <h5>demo name of manga</h5>
                                    <h6>author name</h6>
                                    <div className="divider"></div>
                                </div>
                                <div className="col s12">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ratione reiciendis, accusantium quo quaerat vitae iste incidunt ex voluptatibus tempora ad enim nisi numquam harum non quod corrupti aperiam cumque!
                                    </p>
                                    <div className="divider"></div>
                                </div>
                                <div className="col s12">
                                    <div className="col s6 no-padding-col">
                                        <span id="manga-views">23 views</span>
                                    </div>
                                    <div className="col s6 no-padding-col">
                                        <span id="manga-post-date">december 28 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    renderCarousel() {

        let temp = [];

        for (let i = 0; i < this.state.carouselImages.length; i++) {
            temp.push(
                <Link to="#!" key={i} className="carousel-item">
                    <div className="carousel-img-container" data-image-source={this.state.carouselImages[i]}></div>
                </Link>
            )
        }

        return (
            <div className="carousel carousel-slider">
                {temp}
            </div>
        )
    }

    componentDidMount() {

        let imageElems = document.getElementsByClassName('carousel-img-container');

        Array.prototype.forEach.call(imageElems, elem => {
            elem.setAttribute('style', `background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }

}

export default MainContent;