<template>
    <div>
        <div class="d-flex mt-50">
          <input class="border-0 w-100 p-3 text-secondary list-input" type="text"
                   placeholder="ADD A NEW MISSION...">
            <button class="d-flex border-0 p-3 bg-white">
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
            <h3 class="m-0 text-white">DONE</h3>
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
</template>

<script>
export default {
  name: 'Todolist',
  data() {
    return {
      todoUnDone: false,
      todoDone: false,
    };
  },
};
</script>
