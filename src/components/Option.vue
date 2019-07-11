<template>
  <div class="option bg-third row">
    <div class="col-5 pt-50 pl-85 h-100 d-flex flex-column justify-content-between">
      <div>
        <a href="#"
           class="option-list">
          <i class="material-icons mr-3">
          list
          </i>
          TO-DO LIST
        </a>
        <a href="#"
           class="option-list">
          <i class="material-icons mr-3">
            insert_chart
          </i>
          ANALYTICS
        </a>
        <a href="#"
           class="option-list">
          <i class="material-icons mr-3">
            library_music
          </i>
          RINGTONES
        </a>
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
          25:00
        </p>
        <p class="option-clock-title">
          THE FIRST THIN TO DO TODAY
        </p>
      </div>
    </div>
    <div class="col-5">
      <div class="d-flex mt-50">
        <input class="border-0 w-100 p-3 text-secondary list-input" type="text"
                placeholder="ADD A NEW MISSION...">
        <button class="d-flex border-0 p-3">
          <i class="material-icons text-secondary bg-white">
            add
          </i>
        </button>
      </div>
      <div class="todo mt-5">
        <button class="btn btn-block btn-transparent-white border-0 rounded-0
                       d-flex justify-content-between align-items-center px-3 mb-3"
                @click.prevent="todoUnDone = !todoUnDone">
          <h3 class="m-0 text-white">TO-DO</h3>
          <span>
            <i class="material-icons text-white" v-if="!todoUnDone">arrow_drop_up</i>
            <i class="material-icons text-white" v-if="todoUnDone">arrow_drop_down</i>
          </span>
        </button>
        <ul class="todolist todolist-hidden" :class="{'todolist-show': todoUnDone}">
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="undo-1">
              <label for="undo-1" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="undo-2">
              <label for="undo-2" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="undo-3">
              <label for="undo-3" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
          </ul>
          <button class="btn btn-block btn-transparent-white border-0 rounded-0
                       d-flex justify-content-between align-items-center px-3 mb-3"
                @click.prevent="todoDone = !todoDone">
          <h3 class="m-0 text-white">TO-DO</h3>
          <span>
            <i class="material-icons text-white" v-if="!todoDone">arrow_drop_up</i>
            <i class="material-icons text-white" v-if="todoDone">arrow_drop_down</i>
          </span>
        </button>
        <ul class="todolist todolist-hidden" :class="{'todolist-show': todoDone}">
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="do-1">
              <label for="do-1" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="do-2">
              <label for="do-2" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
            <li class="todolist-item todolist-item-white">
              <input type="checkbox" id="do-3">
              <label for="do-3" class="mr-2">
                <i class="material-icons text-white">
                  check
                </i>
              </label>
                THE SECOND THING TO DO TODAY
              <span><i class="material-icons">play_arrow</i></span>
            </li>
          </ul>
      </div>
    </div>
    <div class="col-2 d-flex flex-column align-items-center justify-content-between">
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
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Option',
  data() {
    return {
      todoUnDone: false,
      todoDone: false,
    };
  },
  methods: {
    toggleOption() {
      $('.option').toggleClass('option-active');
    },
  },
};
</script>
