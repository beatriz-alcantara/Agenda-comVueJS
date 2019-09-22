<template>
    <div>
        <table>
                <th> Evento </th>
                <th> Data </th>
                <th> Horário </th>
                <th> Ações </th>
            <tr :key="atividade.nome" v-for="(atividade, index) in atividades">
                <td> {{ atividade.nome }} </td>
                <td> {{ atividade.data }} </td>
                <td> {{ atividade.hora }} </td>
                <td>
                    <button v-on:click="$emit('habilitarEditar', {atividade, index})"> Editar </button>
                    <button v-on:click="$emit('checked', atividade)"> Feito </button>
                    <button> Cancelar </button>
                </td>
            </tr>
        </table>

        <button id="adicionar" @click="$emit('adicionarAtividade')"> Adicionar Evento </button>
        <button v-on:click="$emit('mostrarFeito')"> Mostrar Atividades Feitas </button>
    </div>
</template>

<script>
export default {
    props: {
        atividades: Array
    }
}
</script>

<style scoped>
    #adicionar {
        position: relative;
        float: left;
        left: 8vw;
        top: 3vh;
    }
    td {
        width: 20vw;
    }
    tr {
        border-bottom: solid;
    }
</style>
