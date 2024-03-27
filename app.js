const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      message: 'Hello World'
    };
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px) 
                rotateX(${this.rotateX}deg)
                rotateX(${this.rotateY}deg)
                rotateX(${this.rotateZ}deg)`,
      };
    },
  },
  methods: {
    reset() {
      (this.perspective = 100), (this.rotateX = 0), (this.rotateY = 0);
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.box.transform};`;
      await navigator.clipboard.writeText(text);

      alert("CSS copied to clipboard");
    },
  },
  beforeCreate(){
    console.log('beforeCreate() function is called', this.message)
  },
  created(){
    console.log('Create() function is called', this.message)
  },
  beforeMount(){
    console.log('beforeMount() function is called', this.$el)
  },
  mounted(){
    console.log('mounted() function is called', this.$el)
  }
});
vm.mount("#app");
