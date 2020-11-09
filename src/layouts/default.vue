<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<div class="container">
				<v-list>
					<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
					>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</div>
		</v-navigation-drawer>

		<v-app-bar app>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

				<v-toolbar-title>Портфолио</v-toolbar-title>
		</v-app-bar>

		<v-main>
				<slot></slot>
		</v-main>
	</v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>
</template>

<script>
	export default {
		name: 'default-template',
		data: () => ({
			drawer: null,
			items: [
				{ title: 'Все работы', to:'/' },
				{ title: 'По тематике', to:'/subject' },
				{ title: 'По типу проекта', to:'/type' },
				{ title: 'По стеку', to:'/stack' }
			]
		})
	}
</script>