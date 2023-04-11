<template>
    <div ref="container"></div>
  </template>
  
  <script>
  import H5P from 'h5p-standalone';
  
  
  export default {
    name: 'h5pContent',
    props: {
      h5pPath: String,
    },
    mounted() {
      const container = this.$refs.container;
      const content = new H5P.Content(this.h5pPath, container);
    },
  };
  </script>