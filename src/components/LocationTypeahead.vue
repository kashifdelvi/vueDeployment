<template>
    <h1 v-if="loading">loading...</h1>
    <b-form-select
      v-if="!loading"
      class="selectLocation"
      v-model="selectedLocation"
      :options="locations"
    ></b-form-select>
    <b-alert show v-if="error" variant="warning">
      {{errorMessage}}
    </b-alert>
    <slot>
      <!--NOTICE BOARD -->
    </slot>
</template>
  
  <script>
import { axiosInstance } from "./../api/axios";
import { GET_LOCATIONS } from "./../api/endpoints";

export default {
  emits: ["fetch-resturants"],
  data() {
    return {
      loading:false,
      selectedLocation: null,
      locations: [],
      error:false,
      errorMessage:''
    };
  },
  methods: {
    fetchLocations() {
      this.$data.loading = true;
      axiosInstance.get(GET_LOCATIONS).then((res) => {
        this.$data.locations = res.data.map((item) => {
          this.$data.loading = false;
          return { ...item, value: item.code, text: item.name };

        })
      }).catch((err)=>{
        this.$data.loading = false;

        this.$data.error = true;
        this.$data.errorMessage = err;
      })
    },
  },
  watch: {
    selectedLocation: function (newValue) {
      if (newValue) {
        this.$emit("fetch-resturants", newValue);
      }
    },
  },
  created() {
    this.fetchLocations();
  },
};
</script>
  
  