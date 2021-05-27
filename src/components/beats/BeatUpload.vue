<template>
  <form @submit.prevent="submitBeatUploadForm">
    <div class="form-control" :class="{ invalid: !title.valid }">
      <label>Title</label>
      <input v-model.trim="title.value" type="text" id="title"/>
      <p v-if="!title.valid">title must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !bpm.valid }">
      <label>BPM</label>
      <input v-model.number="bpm.value" type="number" id="bpm"/>
      <p v-if="!bpm.valid">bpm must be greater than 0 or empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !mp3Price.valid }">
      <label>MP3 Price</label>
      <input
          v-model.number="mp3Price.value"
          type="number"
          id="mp3Price"
      />
      <p v-if="!mp3Price.valid">
        MP3 price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !wavPrice.valid }">
      <label>WAV Price</label>
      <input
          v-model.number="wavPrice.value"
          type="number"
          id="wavPrice"
      />
      <p v-if="!wavPrice.valid">
        WAV price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !zipPrice.valid }">
      <label>ZIP Price</label>
      <input
          v-model.number="zipPrice.value"
          type="number"
          id="ZIPPrice"
      />
      <p v-if="!zipPrice.valid">
        ZIP price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !tags.valid }">
      <label>Tags</label>
      <div>
        <label for="TagHipHop">Hip Hop</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Hip Hop"
            id="TagHipHop"
            checked
        />
      </div>
      <div>
        <label for="TagTrap">Trap</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Trap"
            id="TagTrap"
            checked
        />
      </div>
      <div>
        <label for="TagAlt">Alt</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Alt"
            id="TagAlt"
            checked
        />
      </div>
      <p v-if="!tags.valid">At least one tag must be selected!</p>
    </div>
    <p v-if="!formIsValid">Please fix errors above and resubmit!</p>
    <base-button v-if="mode.value === 'upload'">Upload</base-button>
    <base-button v-else-if="mode.value === 'update'">Save</base-button>
  </form>
</template>

<!--<template>-->
<!--  <div>-->
<!--    <header class="bg-white shadow">-->
<!--      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">-->
<!--        <h1 class="text-3xl font-bold leading-tight text-gray-900">-->
<!--          Upload A Beat-->
<!--        </h1>-->
<!--      </div>-->
<!--    </header>-->
<!--    <div class="container mx-auto my-8">-->
<!--      <div>-->
<!--        <div class="mt-5 md:mt-0 md:col-span-2">-->
<!--          <form>-->
<!--            <div class="shadow sm:rounded-md sm:overflow-hidden">-->
<!--              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">-->
<!--                <div class="grid grid-cols-1 gap-4 xl:grid-cols-4">-->
<!--                  <div>-->
<!--                    <div>-->
<!--                      <label class="block text-sm font-medium text-gray-700">-->
<!--                        Cover-->
<!--                      </label>-->
<!--                      <div class="flex">-->
<!--                        <div class="m-auto">-->
<!--                          <div-->
<!--                              class="box-border mt-1 mb-3 h-72 w-72 p-4 border-2 border-gray-300 border-dashed rounded-md flex justify-center"-->
<!--                          >-->
<!--                            <div-->
<!--                                class="flex flex-col items-center justify-center"-->
<!--                            >-->
<!--                              <svg-->
<!--                                  class="mx-auto h-12 w-12 text-gray-400"-->
<!--                                  stroke="currentColor"-->
<!--                                  fill="none"-->
<!--                                  viewBox="0 0 48 48"-->
<!--                                  aria-hidden="true"-->
<!--                              >-->
<!--                                <path-->
<!--                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"-->
<!--                                    stroke-width="2"-->
<!--                                    stroke-linecap="round"-->
<!--                                    stroke-linejoin="round"-->
<!--                                />-->
<!--                              </svg>-->
<!--                              <div class="flex text-sm text-gray-600">-->
<!--                                <label-->
<!--                                    for="cover-upload"-->
<!--                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"-->
<!--                                >-->
<!--                                  <span>Upload A Cover</span>-->
<!--                                  <input-->
<!--                                      id="cover-upload"-->
<!--                                      name="cover-upload"-->
<!--                                      type="file"-->
<!--                                      class="mt-1 sr-only"-->
<!--                                  />-->
<!--                                </label>-->
<!--                              </div>-->
<!--                              <p class="mt-1 text-xs text-gray-500">-->
<!--                                PNG, JPG, GIF up to 10MB-->
<!--                              </p>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="col-span-3">-->
<!--                    <label-->
<!--                        for="title"-->
<!--                        class="block text-sm font-medium text-gray-700"-->
<!--                    >Beat Title</label-->
<!--                    >-->
<!--                    <input-->
<!--                        required-->
<!--                        v-model.trim="title.value"-->
<!--                        type="text"-->
<!--                        id="title"-->
<!--                        name="title"-->
<!--                        placeholder="Enter a beat title..."-->

<!--                        autocomplete="beat-title"-->
<!--                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"-->
<!--                    />-->

<!--                    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">-->
<!--                      <div>-->
<!--                        <label-->
<!--                            for="genre"-->
<!--                            class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                        >Genre</label-->
<!--                        >-->
<!--                        <select-->
<!--                            v-model="genre.value"-->
<!--                            type="text"-->
<!--                            name="genre"-->
<!--                            id="genre"-->
<!--                            autocomplete="genre"-->
<!--                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"-->
<!--                            required-->
<!--                        >-->
<!--                          <option v-for="genre in genreList" :key="genre">-->
<!--                            {{ genre }}-->
<!--                          </option>-->
<!--                        </select>-->
<!--                      </div>-->

<!--                      <div>-->
<!--                        <label-->
<!--                            for="bpm"-->
<!--                            class="block text-sm font-medium text-gray-700 mt-2 xl:mt-4"-->
<!--                        >BPM</label-->
<!--                        >-->
<!--                        <input-->
<!--                            v-model="bpm.value"-->
<!--                            type="number"-->
<!--                            name="bpm"-->
<!--                            id="bpm"-->
<!--                            autocomplete="bpm"-->
<!--                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"-->
<!--                            required-->
<!--                        />-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="grid grid-cols-2 gap-4">-->
<!--                      <div>-->
<!--                        <label-->
<!--                            for="tags"-->
<!--                            class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                        >Tags</label-->
<!--                        >-->
<!--                        <input-->
<!--                            v-model="tempTag"-->
<!--                            @keydown="addTag"-->
<!--                            @keydown.enter.prevent-->
<!--                            type="text"-->
<!--                            name="tags"-->
<!--                            placeholder="Enter up to three tags..."-->
<!--                            id="tags"-->
<!--                            autocomplete="beat-title"-->
<!--                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"-->
<!--                            required-->
<!--                            v-bind:disabled="tags.length >= 3"-->
<!--                        />-->
<!--                        <div v-for="tag in tags" :key="tag">-->
<!--                          <span-->
<!--                              class="px-4 py-1 text-base rounded-full text-white bg-indigo-500 float-left mr-1 mt-2"-->
<!--                          >-->
<!--                            {{ tag }}-->
<!--                            <button-->
<!--                                class="bg-transparent hover"-->
<!--                                @click="deleteTag(tag)"-->
<!--                            >-->
<!--                              <svg-->
<!--                                  xmlns="http://www.w3.org/2000/svg"-->
<!--                                  width="12"-->
<!--                                  height="12"-->
<!--                                  fill="currentColor"-->
<!--                                  class="ml-4"-->
<!--                                  viewBox="0 0 1792 1792"-->
<!--                              >-->
<!--                                <path-->
<!--                                    d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"-->
<!--                                ></path>-->
<!--                              </svg>-->
<!--                            </button>-->
<!--                          </span>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                      <div>-->
<!--                        <label-->
<!--                            for="options"-->
<!--                            class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                        >Options</label-->
<!--                        >-->
<!--                        <div id="options">-->
<!--                          <div class="grid grid-cols-2 gap-4">-->
<!--                            <div>-->
<!--                              <label class="inline-flex items-center mt-3">-->
<!--                                <input-->
<!--                                    v-model="isPrivate"-->
<!--                                    type="checkbox"-->
<!--                                    class="form-radio"-->
<!--                                    name="isPrivate"-->
<!--                                    value="personal"-->
<!--                                    required-->
<!--                                />-->
<!--                                <span class="ml-2">Private</span>-->
<!--                              </label>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                              <label class="inline-flex items-center mt-3">-->
<!--                                <input-->
<!--                                    v-model="isFree"-->
<!--                                    type="checkbox"-->
<!--                                    class="form-radio"-->
<!--                                    name="isFree"-->
<!--                                    value="personal"-->
<!--                                    required-->
<!--                                />-->
<!--                                <span class="ml-2">Free</span>-->
<!--                              </label>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">-->
<!--                  <div>-->
<!--                    <div>-->
<!--                      <label class="block text-sm font-medium text-gray-700">-->
<!--                        MP3-->
<!--                      </label>-->
<!--                      <div-->
<!--                          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"-->
<!--                      >-->
<!--                        <div class="space-y-1 text-center">-->
<!--                          <svg-->
<!--                              class="mx-auto h-12 w-12 text-gray-400"-->
<!--                              stroke="currentColor"-->
<!--                              fill="none"-->
<!--                              viewBox="0 0 48 48"-->
<!--                              aria-hidden="true"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"-->
<!--                                stroke-width="2"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                            />-->
<!--                          </svg>-->
<!--                          <div class="flex text-sm text-gray-600">-->
<!--                            <label-->
<!--                                for="mp3-upload"-->
<!--                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"-->
<!--                            >-->
<!--                              <span>Upload A File</span>-->

<!--                              <input-->
<!--                                  @change="onAudioFileSelect"-->
<!--                                  accept=".mp3"-->
<!--                                  type="file"-->
<!--                                  class="hidden"-->
<!--                                  id="mp3-upload"-->
<!--                                  name="mp3-upload"-->
<!--                              />-->
<!--                            </label>-->
<!--                            <p class="pl-1">or drag and drop</p>-->
<!--                          </div>-->
<!--                          <p class="text-xs text-gray-500">.MP3 Files Only.</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <p class="text-xs text-gray-500 mt-4">Upload Progress:</p>-->
<!--                    <div class="grid grid-cols-1 gap-4">-->
<!--                      <div>-->
<!--                        <label-->
<!--                            for="mp3Price"-->
<!--                            class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                        >MP3 Price</label-->
<!--                        >-->
<!--                        <div class="mt-1 relative rounded-md shadow-sm">-->
<!--                          <div-->
<!--                              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"-->
<!--                          >-->
<!--                            <span class="text-gray-500 sm:text-sm"> $ </span>-->
<!--                          </div>-->
<!--                          <input-->
<!--                              type="text"-->
<!--                              name="mp3Price"-->
<!--                              id="mp3Price"-->
<!--                              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"-->
<!--                              placeholder="0.00"-->
<!--                          />-->
<!--                          <div-->
<!--                              class="absolute inset-y-0 right-0 flex items-center"-->
<!--                          >-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div>-->
<!--                    <div>-->
<!--                      <label class="block text-sm font-medium text-gray-700">-->
<!--                        WAV-->
<!--                      </label>-->
<!--                      <div-->
<!--                          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"-->
<!--                      >-->
<!--                        <div class="space-y-1 text-center">-->
<!--                          <svg-->
<!--                              class="mx-auto h-12 w-12 text-gray-400"-->
<!--                              stroke="currentColor"-->
<!--                              fill="none"-->
<!--                              viewBox="0 0 48 48"-->
<!--                              aria-hidden="true"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"-->
<!--                                stroke-width="2"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                            />-->
<!--                          </svg>-->
<!--                          <div class="flex text-sm text-gray-600">-->
<!--                            <label-->
<!--                                for="wav-upload"-->
<!--                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"-->
<!--                            >-->
<!--                              <span>Upload A File</span>-->
<!--                              <input-->
<!--                                  @change="onAudioFileSelect"-->
<!--                                  accept=".wav"-->
<!--                                  type="file"-->
<!--                                  class="hidden"-->
<!--                                  id="wav-upload"-->
<!--                                  name="wav-upload"-->
<!--                              />-->
<!--                            </label>-->
<!--                            <p class="pl-1">or drag and drop</p>-->
<!--                          </div>-->
<!--                          <p class="text-xs text-gray-500">.WAV Files Only.</p>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                      <div>-->
<!--                        <div>-->
<!--                          <label-->
<!--                              for="wavPrice"-->
<!--                              class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                          >WAV Price</label-->
<!--                          >-->
<!--                          <div class="mt-1 relative rounded-md shadow-sm">-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"-->
<!--                            >-->
<!--                              <span class="text-gray-500 sm:text-sm"> $ </span>-->
<!--                            </div>-->
<!--                            <input-->
<!--                                type="text"-->
<!--                                name="wavPrice"-->
<!--                                id="wavPrice"-->
<!--                                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"-->
<!--                                placeholder="0.00"-->
<!--                            />-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 right-0 flex items-center"-->
<!--                            >-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="col-span-2">-->
<!--                    <div>-->
<!--                      <label class="block text-sm font-medium text-gray-700">-->
<!--                        ZIP-->
<!--                      </label>-->
<!--                      <div-->
<!--                          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"-->
<!--                      >-->
<!--                        <div class="space-y-1 text-center">-->
<!--                          <svg-->
<!--                              class="mx-auto h-12 w-12 text-gray-400"-->
<!--                              stroke="currentColor"-->
<!--                              fill="none"-->
<!--                              viewBox="0 0 48 48"-->
<!--                              aria-hidden="true"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"-->
<!--                                stroke-width="2"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                            />-->
<!--                          </svg>-->
<!--                          <div class="flex text-sm text-gray-600">-->
<!--                            <label-->
<!--                                for="zip-upload"-->
<!--                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"-->
<!--                            >-->
<!--                              <span>Upload A File</span>-->
<!--                              <input-->
<!--                                  @change="onAudioFileSelect"-->
<!--                                  accept=".zip"-->
<!--                                  type="file"-->
<!--                                  class="hidden"-->
<!--                                  id="zip-upload"-->
<!--                                  name="zip-upload"-->
<!--                              />-->
<!--                            </label>-->
<!--                            <p class="pl-1">or drag and drop</p>-->
<!--                          </div>-->
<!--                          <p class="text-xs text-gray-500">-->
<!--                            PNG, JPG, GIF up to 10MB-->
<!--                          </p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="grid grid-cols-3 gap-4">-->
<!--                        <div>-->
<!--                          <label-->
<!--                              for="trackoutPrice"-->
<!--                              class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                          >Trackout Price</label-->
<!--                          >-->
<!--                          <div class="mt-1 relative rounded-md shadow-sm">-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"-->
<!--                            >-->
<!--                              <span class="text-gray-500 sm:text-sm"> $ </span>-->
<!--                            </div>-->
<!--                            <input-->
<!--                                type="text"-->
<!--                                name="trackoutPrice"-->
<!--                                id="trackoutPrice"-->
<!--                                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"-->
<!--                                placeholder="0.00"-->
<!--                            />-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 right-0 flex items-center"-->
<!--                            >-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->

<!--                        <div>-->
<!--                          <label-->
<!--                              for="unlimitedPrice"-->
<!--                              class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                          >Unlimited Price</label-->
<!--                          >-->
<!--                          <div class="mt-1 relative rounded-md shadow-sm">-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"-->
<!--                            >-->
<!--                              <span class="text-gray-500 sm:text-sm"> $ </span>-->
<!--                            </div>-->
<!--                            <input-->
<!--                                type="text"-->
<!--                                name="unlimitedPrice"-->
<!--                                id="unlimitedPrice"-->
<!--                                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"-->
<!--                                placeholder="0.00"-->
<!--                            />-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 right-0 flex items-center"-->
<!--                            >-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->

<!--                        <div>-->
<!--                          <label-->
<!--                              for="exclusivePrice"-->
<!--                              class="block text-sm font-medium text-gray-700 mt-4"-->
<!--                          >Exclusive Price</label-->
<!--                          >-->
<!--                          <div class="mt-1 relative rounded-md shadow-sm">-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"-->
<!--                            >-->
<!--                              <span class="text-gray-500 sm:text-sm"> $ </span>-->
<!--                            </div>-->
<!--                            <input-->
<!--                                type="text"-->
<!--                                name="exclusivePrice"-->
<!--                                id="exclusivePrice"-->
<!--                                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"-->
<!--                                placeholder="0.00"-->
<!--                            />-->
<!--                            <div-->
<!--                                class="absolute inset-y-0 right-0 flex items-center"-->
<!--                            >-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">-->
<!--                <button-->
<!--                    type="submit"-->
<!--                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"-->
<!--                >-->
<!--                  Upload-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  emits: ["upload-beat", "update-beat"],
  props: ["beatId", "beatTitle", "beatBPM", "beatMp3Price", "beatWavPrice", "beatZipPrice", "beatTags", "beatMode"],
  data() {
    return {
      title: this.beatTitle,
      bpm: this.beatBPM,
      mp3Price: this.beatMp3Price,
      wavPrice: this.beatWavPrice,
      zipPrice: this.beatZipPrice,
      tags: this.beatTags,
      mode: this.beatMode,
      formIsValid: true,
      genreList: [
        "Alternative",
        "Ambient",
        "Boom Bap",
        "Club/Dance",
        "Dancehall",
        "Death/Metal",
        "Drill",
        "East-Coast",
        "Electronic",
        "Emo",
        "Experimental",
        "Grime",
        "Hardcore",
        "Jazz",
        "Lo-Fi",
        "Orchestral",
        "Phonk",
        "Pop",
        "R&B",
        "Reggae",
        "Rock",
        "Soul",
        "Trap",
        "Trill",
        "West Coast",
      ],
      genre: "Trap",
    };
  },
  created() {
    if (this.mode.value === "update" && this.beatId.value) {
      this.setBeatDetailsToEdit(this.beatId.value)
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.title.value === "") {
        this.title.valid = false;
        this.formIsValid = false;
      } else {
        this.title.valid = true;
      }

      if (!this.bpm.value || this.bpm.value < 0) {
        this.bpm.valid = false;
        this.formIsValid = false;
      } else {
        this.bpm.valid = true;
      }

      if (!this.mp3Price.value || this.mp3Price.value < 0) {
        this.mp3Price.valid = false;
        this.formIsValid = false;
      } else {
        this.mp3Price.valid = true;
      }

      if (!this.wavPrice.value || this.wavPrice.value < 0) {
        this.wavPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.wavPrice.valid = true;
      }

      if (!this.zipPrice.value || this.zipPrice.value < 0) {
        this.zipPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.zipPrice.valid = true;
      }

      if (this.tags.value.length < 1) {
        this.tags.valid = false;
        this.formIsValid = false;
      } else {
        this.tags.valid = true;
      }
    },
    submitBeatUploadForm() {
      this.validateForm();

      if (this.formIsValid) {

        var prices = {
          mp3Price: this.mp3Price.value,
          wavPrice: this.wavPrice.value,
          zipPrice: this.zipPrice.value,
        };

        var formData = {
          id: null,
          title: this.title.value,
          bpm: this.bpm.value,
          prices: prices,
          tags: this.tags.value,
          mode: this.mode.value
        };

        if (this.mode.value === "upload") {
          console.log(formData)
          this.$emit("upload-beat", formData);
        } else if (this.mode.value === "update") {
          formData['id'] = this.beatId.value
          this.$emit("update-beat", formData);
        }

      }
    },
    clearValidility(input) {
      this[input].valid = true;
    },
    setBeatDetailsToEdit(id) {
      this.$store.dispatch("beatStore/getBeatById", id).then((result) => {
        this.title = {value: result.title, valid: true}
        this.bpm = {value: result.bpm, valid: true}
        this.mp3Price = {value: result.price.mp3Price, valid: true}
        this.wavPrice = {value: result.price.wavPrice, valid: true}
        this.zipPrice = {value: result.price.UnlimitedPrice, valid: true}
        this.tags = {value: result.tags, valid: true}
      })
    },
  },
};
</script>


<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>