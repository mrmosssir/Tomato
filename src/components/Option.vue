<template>
  <div class="option bg-third row" :class="{'option-active': openEnabled}">
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
    <div class="col-5"></div>
    <div class="col-2"></div>
  </div>
</template>

<script>
export default {
  name: 'Option',
  props: ['openEnabled'],
};
</script>
