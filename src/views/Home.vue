<template>
    <div class="grid grid-template-columns: repeat(1, minmax(0, 1fr)); gap-0 content-start overflow-visible h-24">  
        <div class="flex justify-center">
            <div class="self-start"></div>
            <div class="self-center w-content-max">
                <bar-loader :loading="isLoading" :color="'#1CD349'" 
                :size="200"/>
                <px-assets-table v-if="!isLoading" :assets="assets" />
            </div>
            <div class="self-end"></div>
            
        </div>
        <div class="pt-0 -mt-20 max-w-max ">
            <px-table  :assets="assets"/>
        </div>
    </div>
</template>

<script>
import PxTable from "@/components/PxTable";
import api from '@/api'

export default {
    name: "Home",
    components: {
        PxTable
    },
    
    data() {
        return {
        assets: [],
        isLoading : true
        }
    },
    created(){
        api.getAssets().then(assets => (this.assets = assets)).finally(() => ( this.isLoading = false))
        },

    methods:{
        getData(){
            api.getAssets().then(assets => 
            {
                this.assets = assets
                })
        }
    },

    mounted(){
        setInterval(()=>{
            this.getData()
        },
        50);
    },
    
}

</script>
