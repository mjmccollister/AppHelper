<template>
    <div>
        <b-nav-item-dropdown text="Mouse" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Cat" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
    </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Cat" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
    </div>
</template>

<script>
    export default {
        name: "navBarApplicationsButtons",
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
                    }
                ],
                newConfigName: ''
            }
        }
    }
</script>

<style scoped>

</style>