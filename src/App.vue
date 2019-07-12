<template>
  <div class="w-100" style="height: 100vh;" id="app">
    <!-- main part -->
    <div class="row">
      <div class="col-8 bg-primary" :class="{'bg-light-blue': mode === 'break'}"
           style="height: 100vh;">
        <div class="w-445 ml-85 mt-50">
          <div class="d-flex" :class="{'input-blue': mode === 'break'}">
            <input class="border-0 w-100 p-3 text-secondary list-input" type="text"
                   placeholder="ADD A NEW MISSION...">
            <button class="d-flex border-0 p-3 bg-white">
              <i class="material-icons text-secondary">
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
                <span :class="{'digital-count-play-blue': mode === 'break'}"></span>
              </div>
            </div>
            <div class="digital-clock-time" :class="{'text-dark-blue': mode === 'break'}">
              {{ displayTime }}
            </div>
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
          <a href="#" class="d-block text-secondary font-weight-bold text-right cursor-pointer"
             :class="{'text-dark-blue': mode === 'break'}">
            MORE
          </a>
        </div>
        <div class="play-button-outline" :class="{'play-button-blue': mode === 'break',
             'play-button-start': timePlay}">
          <div class="play-button-progress">
            <div class="progress-left"
                 :class="{'progress-enabled': timePlay}">
              <div class="progress-left-main"
                   :class="{'progress-blue': mode === 'break'}"
                   :style="`transform: rotate(${rotateLeftStr})`">
                <div class="progress-left-color"></div>
              </div>
            </div>
            <div class="progress-right"
                 :class="{'progress-enabled': timePlay}">
              <div class="progress-right-main"
                   :class="{'progress-blue': mode === 'break'}"
                   :style="`transform: translate(-50%, 0) rotate(-${rotateRightStr})`">
                <div class="progress-right-color"></div>
              </div>
            </div>
            <div class="play-button">
              <div class="play-button-center" v-if="!timePlay || stop" @click.prevent="timeStart()">
                <i class="material-icons">
                  play_arrow
                </i>
              </div>
              <div class="play-button-center" v-if="timePlay && !stop" @click.prevent="stop = true">
                <i class="material-icons">
                  pause
                </i>
              </div>
              <span class="play-button-dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 bg-third" style="height: 100vh;">
        <div class="function-bar h-100">
          <div class="text-right">
            <a href="#" @click.prevent="toggleOption()">
              <i class="material-icons">
              list
              </i>
            </a>
          </div>
          <p>POMODORO</p>
        </div>
      </div>
    </div>
    <!-- main part -->
    <!-- option part -->
    <div class="option bg-third row">
      <div class="col-5 pt-50 pl-85 h-100 d-flex flex-column justify-content-between">
        <div>
          <router-link to="/" class="option-list">
            <i class="material-icons mr-3">
            list
            </i>
            TO-DO LIST
          </router-link>
          <router-link to="/analytics" class="option-list">
            <i class="material-icons mr-3">
              insert_chart
            </i>
            ANALYTICS
          </router-link>
          <router-link to="/ringtones" class="option-list">
            <i class="material-icons mr-3">
              library_music
            </i>
            RINGTONES
          </router-link>
        </div>
        <div class="option-clock">
          <div class="option-play-button-back">
            <div class="option-play-button-outline">
              <div class="option-play-button">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
          </div>
          <p class="option-clock-time">
            {{ displayTime }}
          </p>
          <p class="option-clock-title">
            THE FIRST THIN TO DO TODAY
          </p>
        </div>
      </div>
      <div class="col-4">
        <router-view></router-view>
      </div>
      <div class="col-3 d-flex flex-column align-items-center justify-content-between">
        <div class="function-bar h-100">
          <div class="text-right">
            <a href="#" class="bg-third border-0 mt-50 p-0" @click.prevent="toggleOption()">
              <i class="material-icons text-white" style="font-size: 48px;">clear</i>
            </a>
          </div>
          <p>POMODORO</p>
        </div>
      </div>
    </div>
    <!-- option part -->
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'App',
  data() {
    return {
      mode: 'work',
      time: 0,
      workTime: 1500,
      breakTime: 300,
      displayTime: '25:00',
      timePlay: false,
      rotateLeftStr: '',
      rotateRightStr: '',
      stop: false,
    };
  },
  methods: {
    toggleOption() {
      $('.option').toggleClass('option-active');
    },
    timeStart() {
      this.timePlay = true;
      if (!this.stop) {
        this.time = this.workTime;
        if (this.mode === 'break') {
          this.time = this.breakTime;
        }
      }
      let time = this.time;
      this.stop = false;
      const interval = setInterval(() => {
        if (!this.stop) {
          time -= 1;
          this.time = time;
        } else {
          clearInterval(interval);
        }
        if (time > 0) {
          this.displayTime = this.secToMin(time);
          const passTime = this[`${this.mode}Time`] - time;
          let bufferTime = time;
          if (passTime > (this[`${this.mode}Time`] / 2)) {
            bufferTime = (this[`${this.mode}Time`] / 2) - time;
            this.rotateRightStr = this.rotateCal(bufferTime, this[`${this.mode}Time`] / 2);
            // console.log(this.rotateRightStr);
          } else {
            this.rotateLeftStr = this.rotateCal(bufferTime, this[`${this.mode}Time`] / 2);
          }
          // console.log(this.rotateLeftStr)
        } else {
          clearInterval(interval);
          this.clockModeTransfer();
          this.timePlay = false;
        }
      }, 1000);
      this.rotateLeftStr = '0deg';
      this.rotateRightStr = '0deg';
    },
    clockModeTransfer() {
      if (this.mode === 'work') {
        this.mode = 'break';
        this.displayTime = '05:00';
      } else {
        this.mode = 'work';
        this.displayTime = '25:00';
      }
    },
    secToMin(time) {
      const min = this.addZero(Math.floor(time / 60));
      const sec = this.addZero(time % 60);
      return `${min}:${sec}`;
    },
    rotateCal(currentTime, totalTime) {
      return `${Math.floor((currentTime / totalTime) * 180)}deg`;
    },
    addZero(num) {
      if (parseInt(num, 10) < 10) {
        return `0${num}`;
      }
      return `${num}`;
    },
  },
  created() {
    this.secToMin(this.workTime);
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
