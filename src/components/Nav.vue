<template>
  <div id="navbar">
    <img src="@/assets/codehub-logo.svg" class="navbar__logo" />
    <div class="navbar__text">
      <div class="navbar__row1">
        <div class="navbar__links1">
          <router-link to="/home">Home</router-link>
          <p>home</p>
          <p>home</p>
          <p>home</p>
        </div>
        <div class="navbar__links1">
          <p>home</p>
        </div>
      </div>
      <div class="navbar__row2">
        <div class="navbar__links2">
          <router-link to="/about">ABOUT |</router-link>
          <router-link to="/vue-home">VUE HOME</router-link>
        </div>
        <div class="navbar__links1">
          <button>CONTACT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
#navbar {
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#navbar a {
  color: inherit;
  text-decoration: none;
}

.navbar__logo {
  height: auto;
  width: 7vw;
  max-height: 10vh;
  position: absolute;
}

.navbar__text {
  width: 100%;
  display: grid;
}

.navbar__row1 {
  padding-left: 7.5vw;
  max-height: 5vh;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: whitesmoke;
  background-color: #151515;
  font-family: "Graphik Regular", sans-serif;
  font-size: 1rem;
}

.navbar__links1,
.navbar__links2 {
  display: flex;
  align-items: center;
}
/* remove when changed to links */

.navbar__row2 {
  padding-left: 8vw;
  max-height: 5vh;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #151515;
  background-color: whitesmoke;
  font-family: "Shentox", sans-serif;
  font-size: 1rem;
}

button {
  justify-self: flex-end;
  font-family: "Shentox", sans-serif;
  font-size: 1rem;
  background-color: #ff3b00;
  color: white;
  padding: 0.2rem 1rem;
  height: 100%;
}
</style>
