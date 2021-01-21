<template>
  <div class="header">
    {{ new Date().toLocaleString() }}
  </div>
</template>

<script>
export default {
  name: "CurrentTime",

  data() {
    return {
      currentTime: new Date(),
    };
  },
  computed: {},

  watch: {
    currentTime() {
      return new Date();
    },
  },

  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },

    getFormattedDate(date) {
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : "0" + month;
      var day = date.getDate().toString();
      day = day.length > 1 ? day : "0" + day;

      var hour = date.getHours().toString();
      hour = hour.length > 1 ? hour : "0" + hour;

      var minute = date.getMinutes().toString();
      minute = minute.length > 1 ? minute : "0" + minute;

      return ` ${day} ${month}
               ${year}
               ${hour} : ${minute}
               `;
    },
  },

  created() {
    setInterval(() => {
      this.getNow();
    }, 1000);
  },
};
</script>

<style scoped></style>
