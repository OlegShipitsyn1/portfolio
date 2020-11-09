export default {
	actions: {
		async fetchWorks(context) {
			const res = await fetch(`http://localhost:3000/data`)
			console.log(res);
			const works = await res.json()

			context.commit('updateWorks', works)
		}
	},
	
	mutations: {
		updateWorks(state, works) {
			state.works = works
		},

		createWork(state, newWork) {
			state.works.unshift(newWork)
		}
	},

	state: {
		works: [],
	},

	getters: {
		allWorks(state) {
			return state.works
		},
	}
}