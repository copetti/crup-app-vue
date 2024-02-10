<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label
                        for="sigla"
                        class="block text-sm font-medium leading-6 text-gray-900">
                        Sigla
                    </label>
                    <div class="mt-2">
                        <input
                            v-model="model.sigla"
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
                            v-model="model.razao_social"
                            id="razao_social"
                            name="razao_social"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        @click.stop.prevent="update()"
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Atualizar
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

    name: 'CompaniesEdit',

    components: {
    },

    data(){
        return {
            model:{
                codigo: '',
                empresa: '',
                sigla: '',
                razao_social: '',
            },
            response: {
                color: '',
                message: ''
            },
        }
    },

    mounted() {
        this.getCompanieData(this.$route.params.id);
    },

    methods:{
        getCompanieData(id){
            this.axios.get(`http://127.0.0.1:8000/api/empresas/${id}/edit`).then((response) => {
                this.model = response.data
            }).catch((error)=>{
                if(error.request.status == 404)
                    this.$router.push({ path : '/companies' });
            });
        },

        update(){
            if(this.model.codigo == ''){
                this.response.color = 'red';
                this.response.message = 'Digite o códido'
                return;
            }

            if(this.model.empresa == ''){
                this.response.color = 'red';
                this.response.message = 'Digite o nome da empresa'
                return;
            }

            if(this.model.sigla == ''){
                this.response.color = 'red';
                this.response.message = 'Digite a sigla da empresa'
                return;
            }

            if(this.model.razao_social == ''){
                this.response.color = 'red';
                this.response.message = 'Digite a razão social'
                return;
            }

            this.resetResponse();

            const payload = this.model;

            const id = this.model.recnum;
            this.axios.put(`http://127.0.0.1:8000/api/empresas/${id}/edit`, payload).then((response) => {
                this.response.color = 'green';
                this.response.message = 'Empresa atualizada com sucesso!';

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