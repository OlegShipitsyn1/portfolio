<template>
	<div class="root">
		<v-card v-if="allWorks">
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Искать по всем категориям"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
				class="data-table"
        :headers="headers"
        :items="allWorks"
        item-key="name"
        :search="search"
				disable-pagination
				hide-default-footer>
				<template #item.link="item">
						<a class="table-link" target="_blank" :href="item.item.link">
							{{ item.item.link }}
						</a>
				</template>
      </v-data-table>
    </v-card>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
	name: 'portfolio-list',

	computed: {
		...mapGetters(['allWorks'])
	},

	methods: {
		...mapActions(['fetchWorks']),
		...mapMutations(['createWork'])
	},

	async mounted() {
		this.fetchWorks()
	},

	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Название',
					align: 'start',
					value: 'name',
				},
				{ text: 'Тип', value: 'type' },
				{ text: 'Тематика', value: 'subject' },
				{ text: 'Клиент', value: 'stack.client' },
				{ text: 'Сервер', value: 'stack.server' },
				{ text: 'База данных', value: 'stack.database' },
				{ text: 'Стоимость', value: 'cost' },
				{ text: 'Сроки', value: 'terms' },
				{ text: 'Ссылка', value: 'link' },
			]
		}
	}
	};
</script>

<style lang="scss">
	.select {
		max-width: 200px;
	}

	.data-table {
		box-shadow: none;
	}

	tr td:last-child {
		max-width: 200px!important;
	}
</style>
