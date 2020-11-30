<template>
    <div>
        <b-jumbotron style="background-color:white">
            <template #header>{{ appName }}</template>

            <template #lead>
                Use the below table to manage available applications.
            </template>

        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: "ViewApplication",
        data(){
            return{
                appName:'Testing',
                appDescription:'',
                appConfiguration: [
                    {
                        name:'Monthly',
                        columns:[
                            {
                                columnName:'PayCode',
                                columnLabel:'Pay Code',
                                columnPosition:'1',
                                columnType:'text',
                                columnValidations:{
                                    maxLength:'55',
                                    minLength:'3',
                                    validationString:'null',
                                    require:'true'
                                }
                            },
                            {
                                columnName:'StartDate',
                                columnLabel:'Start Date',
                                columnPosition:'2',
                                columnType:'date',
                                columnValidations:{
                                    minDate:''
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>