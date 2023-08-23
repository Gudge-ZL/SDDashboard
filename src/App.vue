<template>
  <div id="root">
    <el-container class="base">
      <el-aside class="sideBar">
        <el-menu text-color="#fff" active-text-color="#ffffff" background-color="#00000009" style="flex:1" :router="true">
          <div class="menuTitle">
            <svg fill="none" class="icon" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
            </svg>
            <div style="text-align: left;" class="label">Welcome</div>
          </div>
          <el-menu-item index="/" class="menuItem">
            <svg fill="none" class="icon" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
            <div style="text-align: left;" class="label">Home</div>
          </el-menu-item>

          <el-menu-item index="/info" class="menuItem">
            <svg fill="none" class="icon" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path>
            </svg>
            <div style="text-align: left;" class="label">Info</div>
          </el-menu-item>
          
          <el-menu-item index="/SD" class="menuItem">
            <svg fill="none" class="icon" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
            </svg>
            <div style="text-align: left;" class="label">Stable Diffusion</div>
          </el-menu-item>

          <el-menu-item index="/Excel" class="menuItem">
            <svg fill="none" class="icon" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"></path>
            </svg>
            <div style="text-align: left;" class="label">Excel</div>
          </el-menu-item>
          
        </el-menu>
      </el-aside>
      <div class="sideBarMask"></div>
      <div class="main">
        <router-view v-slot="{ Component }">
          <keep-alive v-show="$route.path !== '/SD'">
            <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
        </router-view>
        <SDView v-show="$route.path == '/SD'"></SDView>
      </div>
    </el-container>
  </div>

</template>

<script>
import SDView from './views/SDView.vue'
export default {
  components: {
    SDView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#root {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

#welcome {
  height: 300px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.base {
  display: flex;
  height: 100%;
  width: 100%;
}

.sideBar {
  flex: 0;
  height: 100%;
  min-width: 60px;
  background: #42b983;
  box-shadow: 4px 0 15px rgba(0,0,0,.25);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease 0s;
  z-index: 3;
}

.sideBar:hover {
  min-width: 200px;
  background: #2a9b68;
  box-shadow: 2px 0 10px rgba(0,0,0,.25);
}

.sideBarMask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff00;
  z-index: 2;
  pointer-events: none;
  transition: background-color 0.4s;
}

.sideBar:hover + .sideBarMask {
  background-color: #ffffffd4;
}

.menuTitle {
  height: 50px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  color: #ffffff;
  font-size: 14px;
}

.menuItem {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
}

.menuItem:hover {
  background: #2a2a2a0f;
}

.icon {
  flex: 0;
  height: 20px;
  width: 20px;
  display: inline;
  color: #ffffff;
  padding-right: 20px;
  min-width: 20px;
}

.label {
  flex: 1;
  display: inline;
  min-width: none;
}

.main {
  flex: 1;
  flex-direction: column;
  height: 100%;
  background: #fffffff8;
  z-index: 1;
}
</style>
