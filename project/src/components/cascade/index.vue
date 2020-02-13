<template>
<div>
  <select v-model="selected" @change="states">
    <option v-for="item in datas" :key="item.id">{{item.name}}</option>
  </select>
   <select  v-model="selected"  @change="twostates" >
    <option >22222</option>
  </select>
   <select>
    <option >33333</option>
  </select>
</div>
  
</template>
<script>
import { Picker,Area } from "vant";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  props: {},
  components: {
    [Picker.name]: Picker
  },
  data() {
    return {
      selected:"",
      title: "全部",
      pageShow: false,
      columns: [
        {
          values: "",
          className: "column1"
        },
        {
          values: "",
          className: "column2",
          defaultIndex: 0
        },
        {
          values: "",
          className: "column3",
          defaultIndex: 0
        }
      ],
     datas:[],
    };
  },
  computed: {
    ...mapState({
      listData: state => state.home.listData,
    })
  },
  methods: {
    ...mapActions({
      getdata: "home/getdata",
    }), 
    async getCity(){
      const data= await this.getdata({ parentId:"-1"});
      if(data.result){
        console.log(data.data) 
        this.datas = data.data;
      }
    },
    onSwitcher() {},
    states(selected){//获取二级时事件11111111111111
       console.log('111',selected)
    },
    twostates(){
      console.log('111',selecteds)
    }
  },
  created() {},
  mounted() {
    this.getCity()
  }
};
</script>
<style scoped lang=""></style>
