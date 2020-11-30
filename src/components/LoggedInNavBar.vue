<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand>Bot Application Helper</b-navbar-brand>
                <b-nav-item href="#">Home</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown v-for="appData in applicationList" :key="appData.id" :text="appData.name"  >
                    <b-dropdown-item :key="configData" v-for="configData in appData.configurations" class="d-inline w-auto">{{configData}}</b-dropdown-item>
                    <b-nav-form class="form-inline">
                        <b-form-input class="mr-sm-2" placeholder="Add Configuration"></b-form-input>
                        <b-form-input class="btn btn-sm btn-outline-success" value="Add Configuration" @click="addClass()" />
                    </b-nav-form>

                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Admin">
                    <b-dropdown-item href="/Add Application">Add Application</b-dropdown-item>
                </b-nav-item-dropdown>


                <div>
                    <b-nav-item-dropdown text="User" right>
                        <b-dropdown-item href="#">Account</b-dropdown-item>
                        <b-dropdown-item href="#">Settings</b-dropdown-item>
                    </b-nav-item-dropdown>
                </div>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "navBar",
        components:{
        },
        data() {
            return {
                applicationList: [
                    {
                        "name": "Payroll Calendar",
                        "id": "001",
                        "configurations": [
                            "Monthly",
                            "Bi-Weekly",
                            "Weekly"
                        ]
                    },
                    {
                        "name": "Internal Transfers - US",
                        "id": "002",
                        "configurations": [
                            "Exempt Job Roles",
                            "Static List"
                        ]
                    },
                    {
                        "name": "Internal Transfers - India",
                        "id": "003",
                        "configurations": [
                            "Exempt Job Roles",
                            "Static List"
                        ]
                    }
                ],
                newConfigName: ''
            }
        },
        mounted() {
            this.applicationList = this.$store.getters.getBotApplicationList;
        }
    }
</script>

<style scoped>

</style>