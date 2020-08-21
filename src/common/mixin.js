import BackTop from "components/content/backTop/BackTop"
export const backTopMixin = {
    data() {
        return {
            isShowBackTop:false,
        }
    },
    methods: {
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
          },
        
    },
    components : {
        BackTop
    }
}