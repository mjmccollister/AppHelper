<template>
    <div name="ManageApplicationsTable">
        <b-table table-responsive hover :items="botApplications" :fields="fields">
            <template #cell(name)="row">
                {{ row.value }}
            </template>
            <template #cell(actionButtons)>
                <b-btn class="btn-outline-warning" style="background:white;">
                    <b-icon-brush />
                </b-btn>
                <b-btn class="btn-outline-danger" style="background:white;">
                    <b-icon-trash />
                </b-btn>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        name: "ManageApplicationsTable",
        data() {
            return {
                botApplications:[],
                fields:[
                    {
                        key: 'name',
                        sortable: true,
                        label: 'Application'
                    },
                    {
                        key:'actionButtons',
                        label:''
                    }
                ]
            }
        },
        methods:{
            meowMeow(){
                alert("meow");
            }
        },
        mounted() {
            this.botApplications = this.$store.getters.getBotApplicationList;
        }
    }
</script>

<style scoped>

</style>