<template>
  <div class="hello">
    <table v-if="atividades.length > 0">
      <caption>Atividades</caption>
      <tr :key="atividade.id" v-for="atividade in atividades">
        <td> {{ atividade.nome }} </td>
        <td> Data: {{ atividade.data }} às {{ atividade.hora }} </td>
        <td>
          <button class="btn editar"> Editar </button>
          <button id="feito" class="btn"> Feito </button>
          <button id="cancelado" class="btn"> Cancelado </button>
        </td>
      </tr>
    </table>
    <span v-else> Sem Eventos para realizar. </span>
    <button id="adicionar" class="btn editar"><router-link class="link" to="/Adicionar"> Adicionar Evento </router-link> </button>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Table',
  data () {
    return {
      atividades: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/eventos').then((res) => {
      this.atividades = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  position: relative;
  top: 10vh;
  left: 15vw;
}
 table {
  position: relative;
  float: center;
  top: 10vh;
  right: 8vw;
  border-collapse: collapse;
}
table, td {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}
td {
  padding-left: 4vw; 
}
tr {
  position: relative;
  margin: 0 3vw 0 3vw;
}
.btn {
  position: relative;
  border-radius: 5px;
  border: none;
  width: 12vw;
  height: 5vh;
  margin: 1vh 2vw 1vh 2vw;
}
button:hover {
    cursor: pointer;
}
.editar {
  background-color: cadetblue;
  -webkit-text-fill-color: ghostwhite;
}
#feito {
  background-color: rgb(84, 172, 76);
  -webkit-text-fill-color: ghostwhite;
}
#cancelado {
  background-color: rgb(206, 51, 30);
  -webkit-text-fill-color: ghostwhite;
}
#adicionar {
  top: 20vh;
  right: 20vw;
}
button > .link {
  text-decoration: none;
  color: whitesmoke;
}
span {
  position: relative;
  text-align: center;
  right: 5vw;
}
</style>
