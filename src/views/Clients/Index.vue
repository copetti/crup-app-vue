<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">
                    Empresas
                </h1>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <router-link to="/clientes/create">Criar Cliente</router-link>
                </button>
            </div>
        </div>
        <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        RecNum
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Empresa
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Código
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Razão Social
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Tipo
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        CPF_CNPJ
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Criado Em
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">Editar</span>
                        <span class="sr-only">Excluir</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cliente in clientes" :key="cliente.recnum">
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div class="font-medium text-gray-900">
                            {{ cliente.recnum }}
                        </div>
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.empresa }}
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.codigo }}
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.razao_social }}
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.tipo }}
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.cpf_cnpj }}
                    </td>
                    <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
                        {{ cliente.created_at }}
                    </td>
                    <td class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <router-link
                            :to="{ path: `/clientes/${cliente.recnum}/edit` }"
                            class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        >
                            Editar
                        </router-link>
                        <a
                            href="#"
                            @click="deleteCliente(cliente.recnum)"
                            class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        >
                            Excluir
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {

    name: 'Index',

    components: {

    },

    data() {
        return {
            clientes: [],
        };
    },

    created() {
        this.getClientes();
    },

    methods:{
        getClientes(){
            this.axios.get('http://127.0.0.1:8000/api/clientes').then((response) => {
                this.clientes = response.data
            });
        },
        deleteCliente(recnum){
            if(confirm('Tem certeza que deseja excluir?')){
                this.axios.delete(`http://127.0.0.1:8000/api/clientes/${recnum}/delete`).then((response) => {
                    this.getClientes()
                });
            }
        }
    }
}

</script>