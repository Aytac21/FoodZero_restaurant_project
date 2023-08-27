function Footer() {
  return (
    <>
      <footer className="">
        <div className="footerdiv container__full">
          <div>
            <h1>Food Zero.</h1>
          </div>
          <div className="footer_contact">
            <h2>Contact</h2>
            <p>
              <span> +1+86 852 346 000 </span>
              <span>info@foodzero.com </span>
            </p>
            <p>
              <span> 1959 Sepulveda Blvd. </span>
              <span>Culver City, CA, 90230</span>
            </p>
          </div>
          <div className="footer_input">
            <h2>Never Miss a Recipe</h2>
            <div className="input_div">
              <input type="email" name="" id="" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
            <p>Join our subscribers and get best recipe delivered each week!</p>
          </div>
        </div>
        <div className="pointt container__full"></div>
        <div className="logos container__full">
          <p>© 2020 Zero Inc. All rights Reserved</p>

          <div>
            <a href="https://www.instagram.com">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="https://www.twitter.com">
              <img src="/twitter.png" alt="" />
            </a>
            <a href="https://www.facebook.com">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="https://www.youtube.com">
              <img src="/youtube.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
