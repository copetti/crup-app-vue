<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label
                        for="codigo"
                        class="block text-sm font-medium leading-6 text-gray-900">
                        Código
                    </label>
                    <div class="mt-2">
                        <input
                            v-model="codigo"
                            type="text"
                            id="codigo"
                            name="codigo"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="empresa"
                        class="block text-sm font-medium leading-6 text-gray-900">
                        Empresa
                    </label>
                    <div class="mt-2">
                        <input
                            v-model="empresa"
                            type="text"
                            id="empresa"
                            name="empresa"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="sigla"
                        class="block text-sm font-medium leading-6 text-gray-900">
                        Sigla
                    </label>
                    <div class="mt-2">
                        <input
                            v-model="sigla"
                            type="text"
                            id="sigla"
                            name="sigla"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="razao_social"
                        class="block text-sm font-medium leading-6 text-gray-900">
                        Razão Social
                    </label>
                    <div class="mt-2">
                        <input
                            type="text"
                            v-model="razao_social"
                            id="razao_social"
                            name="razao_social"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        @click.stop.prevent="create()"
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Salvar
                    </button>
                </div>

                <div
                    v-if="response.message"
                    :class="`bg-${response.color}-100 border border-${response.color}-400 text-${response.color}-700 px-4 py-3 rounded relative`" role="alert"
                >
                    <span class="block sm:inline">{{ response.message }}</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {

    name: 'CompaniesCreate',

    components: {
    },

    data(){
        return {
            codigo: '',
            empresa: '',
            sigla: '',
            razao_social: '',
            response: {
                color: '',
                message: ''
            },
        }
    },

    methods:{
        create(){

            if(this.codigo == ''){
                this.response.color = 'red';
                this.response.message = 'Digite o códido'
                return;
            }

            if(this.empresa == ''){
                this.response.color = 'red';
                this.response.message = 'Digite o nome da empresa'
                return;
            }

            if(this.sigla == ''){
                this.response.color = 'red';
                this.response.message = 'Digite a sigla da empresa'
                return;
            }

            if(this.razao_social == ''){
                this.response.color = 'red';
                this.response.message = 'Digite a razão social'
                return;
            }

            const payload = {
                codigo: this.codigo,
                empresa: this.empresa,
                sigla: this.sigla,
                razao_social: this.razao_social,
            }

            this.resetResponse();

            this.axios.post('http://127.0.0.1:8000/api/empresas', payload).then((response) => {
                this.response.color = 'green';
                this.response.message = 'Empresa criada com sucesso!';

                setTimeout(() => {
                    this.$router.push({ path : '/companies' });
                }, "1000");

            }).catch((e)=>{
                this.response.color = 'red';
                this.response.message = 'Erro ao criar empresa!';
            })
        },

        resetResponse(){
            this.response.color = '';
            this.response.message = ''
        },
    }
}
</script>