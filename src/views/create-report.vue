<template>
    
        <div class="form_container">
            <h2> Reporte por fecha de nacimiento</h2>
            <h3> ingresa los siguientes datos apra generar tu reporte</h3>
            <form class="form_container_input">
                <fieldset>
                    <legend>Descripcion del reporte</legend>
                    <input  type="text" name="title" v-model="title">
                </fieldset>
                <h4> fecha de nacimiento </h4>
                <div class="date_container">
                    <fieldset>
                        <legend>inicio</legend>
                            <input  type="date" name="start" v-model="start">
                    </fieldset>
                    <fieldset>
                        <legend>fin</legend>
                             <input  type="date" name="end" v-model="end">
                    </fieldset>
                </div>
            </form>
                <button   class="btn" @click="createReport"> Crear Reporte</button>
                <div class="aprove"  v-if="isCreate">
                    <p> Se ha creado el reporte</p>
                </div>
        </div>
</template>

<script>
import generateReport from "../services/ReportUser/GenerateReport.js";

export default {
    data() {
        return {
            title: '',
            start: '',
            end: '',
            isCreate: false,
        }
    },
    methods: {
         createReport() {
            generateReport({title:this.title,start: this.start,end: this.end}).then(()=> {
                this.isCreate = true;
                setTimeout(() => {
                    this.$router.push('/');
                }, 1000);
               
            }).catch(error => {
                console.log(error);
            })
         }
    },
    
}
</script>

<style>

.form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*border-radius:15px;*/
    /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
    padding:15px;
    /*border: solid 1px rgba(251, 222, 222, 0.25);*/
    margin-top: 20px;
}
.date_container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #FFBE12;
    border-radius: 50px;
    padding: 12px 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    text-decoration-style: none;
    color: black;
    font-size:20px;
    margin-top:20px;

}
.form_container_input{
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.aprove{
    background: #00e77d;
    margin-top: 20px;
    border-radius: 15px;
}

@media (max-width: 400px) {
    .btn {
        padding: 10px 10px;
    }
}
    

</style>