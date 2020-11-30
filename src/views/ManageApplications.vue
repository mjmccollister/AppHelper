<template>
    <div>
        <b-jumbotron style="background-color:white">
            <template #header>Manage Applications</template>

            <template #lead>
                Use the below table to manage available applications.
            </template>

            <ManageApplicationsTable />
        </b-jumbotron>
    </div>
</template>

<script>
    import ManageApplicationsTable from "../components/ManageApplicationsTable.vue";

    export default {
        name: "ManageApplications",
        components:{
            ManageApplicationsTable
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>