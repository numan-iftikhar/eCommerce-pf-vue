<template>
  <!-- Footer -->
  <div class="footer">
    <div class="wrapper">
      <div class="row">
        <div class="footer-col-1">
          <h3>Download Our App</h3>
          <p>
            Download App for Android <br />
            and ios mobile phone
          </p>
          <div class="app-logo">
            <img src="../assets/images/google-play.png" alt="" />
            <img src="../assets/images/google-play.png" alt="" />
          </div>
        </div>
        <div class="footer-col-2">
          <div class="logo">Shopie</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit.
            Porro, eum?
          </p>
        </div>
        <div class="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>

        <div class="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="copyright">Copyright 2022 - Shopie.com</p>
    </div>
  </div>
</template>

<style>
.footer {
  background: #000;
  color: #8a8a8a;
  font-size: 14px;
  padding: 3rem 0;
  text-align: center;
}
.footer > .wrapper {
  width: 70%;
  margin: 0 auto;
}
.footer p {
  color: #8a8a8a;
}
.footer h3 {
  color: #fff;
  margin-bottom: 20px;
}
.footer-col-1,
.footer-col-2,
.footer-col-3,
.footer-col-4 {
  min-width: 15.625rem;
  margin-bottom: 20px;
}

.footer-col-1 {
  flex-basis: 30px;
}

.footer-col-2 {
  flex: 1;
  text-align: center;
}
.footer-col-2 .logo {
  color: white;
}
.footer-col-3,
.footer-col-4 {
  flex-basis: 12%;
  text-align: center;
}
ul {
  list-style-type: none;
}
.app-logo {
  margin-top: 20px;
}
.app-logo img {
  width: 140px;
  margin-bottom: 1rem;
  margin-inline: auto;
}

.footer hr {
  border: none;
  background: #b5b5b5;
  height: 1px;
  margin: 20px 0;
}
.copyright {
  text-align: center;
}
.menu-icon {
  width: 28px;
  margin-left: 20px;
  /* display: none; */
}
</style>
