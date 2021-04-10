<template>
  <create />
</template>

<script>
import Create from "~/components/NewUser"

export default {
  components: {
    Create,
  },
//   data() {
//     return {
//       resources: {
//         title: "New Area",
//         base: "/app/basic/areas",
//         path: "Areas"
//       }
//     }
//   },
  head() {
    return {
      title: "create User"
    }
  }
}
</script>
