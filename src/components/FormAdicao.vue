<template>
  <div>
    <h1> Cadastrar um Evento para fazer </h1>
    <form class="formulario">
        <label for="evento"> Nome do evento </label>
        <input id="evento" type="text" v-model="nome"/><br/>
        <label for="evento"> Data do evento </label>
        <input id="evento" v-model="data" type="date"/><br/>
        <label for="evento"> Horário do evento </label>
        <input id="evento" v-model="hora" type="time"/><br/>

        <button @click="adicionarEvento()"><router-link class="link" to="/"> Salvar </router-link></button>
        <button id="voltar"><router-link class="link" to="/"> Voltar </router-link></button>
    </form>
  </div>
</template>

<script>
import Table from './Table.vue'
const axios = require('axios')
export default {
    name: 'Formadicao',
    components: {
        Table
    },
    data () {
        return {
            nome: '',
            data: '',
            hora: ''
        }
    },
    methods: {
        adicionarEvento () {
            axios.post('http://localhost:3000/salvarEvento', {
                nome: this.nome,
                hora: this.hora,
                data: this.data
            }).then((res) => {
                console.log(res)
            })
        }
    } 
}
</script>

<style>
.formulario {
    position: relative;
    top: 15vh;
    border: 1px solid;
    width: 50vw;
    left: 25vw;
}
input, label {
    margin: 4vh 0 4vh 0;
}
button {
    position: relative;
    border-radius: 5px;
    border: none;
    width: 12vw;
    height: 5vh;
    margin: 1vh 2vw 1vh 2vw;
    background-color: cadetblue;
}
button:hover {
    cursor: pointer;
}
button > .link {
    text-decoration: none;
    color: whitesmoke;
}
.link {
    text-align: center;
    position: relative;
    right: 1vw; 
    padding: 11% 30% 11% 41% ;
}
#voltar {
    background-color: rgb(206, 51, 30);
}
</style>