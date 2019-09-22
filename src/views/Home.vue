<template>
    <div>
        <div v-if="modoEditar === false && listaFeito === false">
            <h2> Atividades Para fazer </h2>
            <Tabela :atividades="dados" v-on:habilitarEditar="modoEditar=true, mudar=$event" v-on:adicionarAtividade="modoEditar=true" v-on:checked="realizado($event)" v-on:mostrarFeito="listaFeito=true"/>
        </div>

      <Editor v-if="modoEditar" v-slot:default="props" :elemento="mudar" v-on:salvar="salvarDados($event), modoEditar=false">
      </Editor>

        <div v-if="listaFeito">
            <h2> Atividades Realizadas </h2>
            <Tabela :atividades="feito"/>
            <button @click="listaFeito = false"> Voltar </button>
        </div>
    </div>
</template>

<script>
import Tabela from '../components/Tabela.vue'
import Editor from '../components/Editor.vue'
export default {
    name: 'Home',
    components: {
        Tabela,
        Editor
    },
    data () {
        return {
            mudar: {
                nome: '',
                data: '',
                hora: ''
            },
            modoEditar: false,
            listaFeito: false,
            dados: [
                {
                    nome: 'Ir para escola',
                    data: '2019-15-01',
                    hora: '7:00'
                },
                {
                    nome: 'Ir para natação',
                    data: '2019-15-01',
                    hora: '15:00'
                }
            ],
            feito: []
        }
    },
    methods: {
        salvarDados (elemento) {
            if (elemento.indice >= 0) {
                this.dados[elemento.indice] = elemento.evento
            } else {
                this.dados.push(elemento.evento)
            }
        },
        realizado (el) {
            this.feito.push(el)
            this.dados = this.dados.filter(obj => obj !== el)
        }
    }
}
</script>