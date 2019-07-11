<template>
  <div class="w-100" style="height: 100vh;" id="app">
    <div class="row">
      <div class="col-8 bg-primary" style="height: 100vh;">
        <div class="w-445 ml-85 mt-50">
          <div class="d-flex">
            <input class="border-0 w-100 p-3 text-secondary list-input" type="text"
                   placeholder="ADD A NEW MISSION...">
            <button class="d-flex border-0 p-3">
              <i class="material-icons text-secondary bg-white">
                add
              </i>
            </button>
          </div>
          <div class="digital-clock">
            <div class="digital-clock-header">
              <input type="checkbox" id="done">
              <label for="done"><i class="material-icons text-white">check</i></label>
              <div class="digital-clock-title ml-3">
                <h2>THE FIRST THING TO DO TODAY</h2>
                <span></span>
              </div>
            </div>
            <div class="digital-clock-time">25:00</div>
          </div>
          <ul class="todolist">
            <li class="todolist-item">
              <input type="checkbox" id="todo-1">
              <label for="todo-1" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item">
              <input type="checkbox" id="todo-2">
              <label for="todo-2" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item">
              <input type="checkbox" id="todo-3">
              <label for="todo-3" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
          </ul>
          <a href="#" class="d-block text-secondary font-weight-bold text-right cursor-pointer">
            MORE
          </a>
        </div>
        <div class="play-button-outline">
          <div class="play-button">
            <div class="play-button-center">
              <i class="material-icons">
                play_arrow
              </i>
            </div>
            <span class="play-button-dot"></span>
          </div>
        </div>
      </div>
      <div class="col-4 bg-third" style="height: 100vh;">
        <div class="function-bar h-100">
          <div class="text-right">
            <a href="#" @click.prevent="openOption()">
              <i class="material-icons">
              list
              </i>
            </a>
            <!-- <a href="#" @click.prevent="openOption()">
              <i class="material-icons">
                insert_chart
              </i>
            </a>
            <a href="#" @click.prevent="openOption()">
              <i class="material-icons">
                library_music
              </i>
            </a> -->
          </div>
          <p>POMODORO</p>
        </div>
      </div>
    </div>
    <Option></Option>
  </div>
</template>

<script>
import $ from 'jquery';
import Option from './components/Option';

export default {
  name: 'App',
  data() {
    return {
      optionOpen: false,
    };
  },
  components: {
    Option,
  },
  methods: {
    openOption() {
      $('.option').toggleClass('option-active');
    },
  },
};
</script>

<style lang="scss">
@import './sass/style.scss';
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular');
}
#app {
  font-family: 'Roboto', sans-serif;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>
