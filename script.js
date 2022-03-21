const baseUrl = "https://restrecords220220321134320.azurewebsites.net/api/records"

Vue.createApp({
    data(){
        return{
            records : []
        }
    },
    methods: {
        getRecords(){
            this.getRecordsHelper(baseUrl)
        },
        async getRecordsHelper(url){
            try{
                const response = await axios.get(url)
                this.records = await response.data
                console.log(this.records)
            }
            catch(ex){
                alert(ex.message)
            }
        }
    }
}).mount("#app")