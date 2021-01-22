<template>
  <div class="timer d-flex flex-column align-content-start">
    <div class="date font-weight-bold">{{ date }}</div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",

  data() {
    return {
      date: null,
      time: null,
      timestamp: null,
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

      const day = () => {
        const day = today.getDate();

        const ordinal = () => {
          if (day === 1) {
            return "st";
          } else if (day === 2) {
            return "nd";
          } else if (day === 3) {
            return "rd";
          } else {
            return "th";
          }
        };
        return day + ordinal();
      };
      const month = () => {
        const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return month[today.getMonth()];
      };
      const date = day() + " of " + month() + " " + today.getFullYear();

      const second = () => {
        if (today.getSeconds() >= 10) {
          return today.getSeconds();
        } else if (today.getSeconds() < 10) {
          return "0" + today.getSeconds();
        }
      };

      const minute = () => {
        if (today.getMinutes() >= 10) {
          return today.getMinutes();
        } else if (today.getMinutes() < 10) {
          return "0" + today.getMinutes();
        }
      };

      const hour = () => {
        if (today.getHours() >= 10) {
          return today.getHours();
        } else if (today.getHours() < 10) {
          return "0" + today.getHours();
        }
      };

      const time = hour() + ":" + minute() + ":" + second();

      this.time = time;
      this.date = date;
    },
  },

  created() {
    setInterval(() => {
      this.getNow();
    }, 1000);
  },
};
</script>

<style scoped>
.timer {
  color: rgba(24, 30, 52, 0.9);
}
.date {
  font-size: 2rem;
}
.time {
  font-size: 3rem;
}
</style>
