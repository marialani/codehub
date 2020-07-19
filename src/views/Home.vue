<template>
  <div class="home">
    <div class="home__content">
      <div class="home__main">
        <img src="@/assets/codehub-title.png" class="home__title" />
        <p class="home__paragraph">
          LOREM IPSUM &bull; DOLOR SIT &bull; AMIT CONSECUTER
        </p>
        <button class="home__button">EXPLORE</button>
        <img src="@/assets/temp-home/tag2.png" style="width: 10vw" />
      </div>
    </div>
    <div class="home__footer">
      <div class="home__powered">
        <h4
          style="display: inline-block; padding: 1rem 1rem .5rem 1rem; border-bottom: 0.05rem solid linear gradient(to right, rgb(234, 96, 96), rgb(113, 23, 234))"
        >
          Powered By
        </h4>
        <br />
        <img src="@/assets/svg/pluralsight-logo.svg" style="width: 10vw" />
        <img src="@/assets/svg/Codecademy.svg" style="width: 10vw" />
        <img
          style="background-color: white; width: 10vw; padding:0; margin:0;"
          src="@/assets/svg/freecodecamp.svg"
        />
        <img src="@/assets/svg/exercism.svg" style="width: 10vw" />
        <img src="@/assets/svg/udemy.svg" style="width: 10vw" />
        <img src="@/assets/svg/coursera.svg" style="width: 10vw" />
        <img src="@/assets/svg/edx.svg" style="width: 10vw" />
        <img src="@/assets/svg/linkedin-learning.svg" style="width: 10vw" />
        <img src="@/assets/svg/sololearn.svg" style="width: 10vw" />
        <!-- <img src="@/assets/svg/mimo.svg" style="width: 10vw" /> -->
        <img
          src="@/assets/svg/zigzag.svg"
          style="width: 10%; position: absolute; position: absolute; top: 0%; left: 50%; transform: translate(-50%, -50%);"
        />
        <img
          src="@/assets/svg/laptop.svg"
          style="width: 10%; position: absolute; bottom: -4%; right: 10vw; max-height: 80%"
        />
        <img
          src="@/assets/svg/network.svg"
          style="width: 10%; position: absolute; top: 0; left: 0; max-height: 80%"
        />
      </div>
    </div>

    <div
      style="position: absolute; top: 50%; right: 0; display: flex; flex-direction: column;"
    >
      <img src="@/assets/svg/github.svg" style="width: 10vw" />
      <img src="@/assets/svg/linkedin.svg" style="width: 10vw" />
      <img src="@/assets/svg/portfolio.svg" style="width: 10vw" />
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  background: url("http://res.cloudinary.com/dmwyuc3gd/image/upload/dpr_auto,e_auto_contrast,f_auto,g_east,q_auto/v1/code-hub/home-page/home-bg_oonwyp.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-size: cover;
  padding-top: 10vh;
}

.home__content {
  display: grid;
  /* grid-gap: 0.2rem; */
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(9, 1fr);
  margin: 0 auto;
  max-width: 1280px;
  height: 90vh;
}

.home__main {
  color: #ff3b00;
  grid-area: 2 / 2 / span 4 / span 4;
  align-self: center;
  font-family: "Graphik Regular", sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

.home__title {
  max-width: 100%;
  max-width: 100%;
  /* z-index: 1; */
}

.home__paragraph {
  line-height: 1.6;
}

.home__button {
  background-color: #ff3b00;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 0.2rem;
  font-family: "Shentox", sans-serif;
  color: white;
}

.home__footer {
  position: absolute;
  bottom: 0;
  background: linear-gradient(rgba(23, 46, 58, 0.8), rgba(67, 128, 159, 0.8));
  height: 15vh;
  width: 100%;
}

.home__powered {
  font-family: "Avalon Normal", sans-serif;
  font-size: 0.7rem;
  overflow: hidden;
  color: rgb(181, 211, 226);
}

/* media  queries */
/*
@media only screen and (min-width: 1024px) {
  .home-content {
    /* grid-gap: 0; */
/* } */
/* } */
/* */
</style>

<script>
export default {
  name: "Home",
};
</script>
