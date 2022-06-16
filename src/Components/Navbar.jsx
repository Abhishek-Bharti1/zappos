import React from "react";
import '../styled/Navbar.css'
function Navbar() {
  return (
    <>
      <div className="navbartop">
        <div className="logos">
          <div className="zapoos">
            <img
              src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg"
              alt=""
            />
          </div>
          <div className="vrsnl">
            <img
              src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg"
              alt=""
            />
          </div>
        </div>
        <div className="secondlogo">
          <div className="cservice">
            <h3>Customer Service</h3>
          </div>
          <div className="quote">
            <p>
              Every Zappos order comes with FAST, FREE Shipping, plus a FREE
              365-Day Return Policy!{" "}
            </p>
          </div>
        </div>

        <div className="searchbar">
          <div className="div1">
            <img
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              alt=""
            />
          </div>
          <div className="div2">
            <input type="text" placeholder="Search for shoes, clothes, etc." />
            <button>SEARCH</button>
          </div>
          <div className="div3">
            <button> MY Cart</button>
          </div>
        </div>

        {/* dropdown */}
        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">
              New
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/ugg-350x350.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Women
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/GLOBAL-NAV-LLBEAN-WOMENS1-350x350.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/vionic-bella-350x350.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Men
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/GLOBAL-NAV-LLBEAN-MENS1-350x350.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/vionic-bella-350x350.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Kids
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/KIDS-BABY-BEACH-ESSENTIALS-GLOBAL-NAV.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Departments
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-TRAIL-RUNNING-SHOES-GLOBAL-NAV.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/April/zgc-global-nav-mothers-day.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Brand
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/image.png"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/VANS-CLASSIC-SLIP-ON-GLOBAL-NAV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Sale
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/image.png"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/VANS-CLASSIC-SLIP-ON-GLOBAL-NAV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Clothing
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              <div className="box">
                <div className="part1">
                  <a href="#">The Find</a>
                  <a href="#">Boldest Spring Trends</a>
                  <a href="#">Zappos X Beach Riot</a>
                  <a href=""> The Ultimate Sneaker Guide</a>
                  <a href="">The Spring Sandal Edit</a>
                  <a href="">Fresh Spring Denim</a>
                  <a href="">Energizing Sporty Looks</a>
                </div>

                <div className="part1">
                  <a href="#">The Style Room</a>
                  <a href="#">Super Puff with Coach</a>
                  <a href="#">Summer Glam</a>
                  <a href="">New Season, New Possibilities</a>
                  <a href="">Dopamine Dressing</a>
                  <a href="">Men’s Summer Staples</a>
                  <a href="">Men’s Joyful Color</a>
                </div>

                <div className="part1">
                  <a href="#">New Brands</a>
                  <a href="#">Fairfax and Favo</a>
                  <a href="#">Milwaukee Boot Co</a>
                  <a href="">Jambys</a>
                  <a href="">Moral Code</a>
                  <a href="">UGG® Universal</a>
                </div>

                <div className="photo">
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-YOGA-MAY-GLOBAL-NAV.jpg"
                    alt=""
                  />
                  <img
                    src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sign">
            <h2>Sign In/Register</h2>
          </div>
        </div>

        {/* dropdownends */}
      </div>
    </>
  );
}

export {Navbar}
