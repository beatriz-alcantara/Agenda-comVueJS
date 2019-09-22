<template>
    <div class="principal">
        <div class="formulario">
            <slot :atividade="evento"></slot>
            <span id="labels">
            <label for="nome"> Evento: </label>
            <label for="data"> Data: </label>
            <label for="hora"> Horário: </label>
            </span>

            <span id="entradas">
                <input id="nome" type="text" v-model="evento.nome"/>
                <input id="data" type="text" v-model="evento.data"/>
                <input id="hora" type="text" v-model="evento.hora"/>
            </span> <br/>
            <button v-on:click="$emit('salvar', {evento, indice: elemento.index})"> Salvar </button>
            <button> Cancelar </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Editor',
    props: {
        elemento: Object
    },
    data () {
        return {
            evento: {
                nome: '',
                data: '',
                hora: ''
            }
        }
    },
    mounted () {
        if (this.elemento.atividade) this.evento = this.elemento.atividade        
    }
}
</script>

<style scoped>
input {
    display: block;
    margin-bottom: 2vh;
}
#entradas {
    position: relative;
    display: inline-block;
    left: 1vw;
}
#labels {
    display: inline-block;
}
label {
    display: block;
    margin-bottom: 2.5vh;
}
</style>
