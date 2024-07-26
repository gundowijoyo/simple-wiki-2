<!-- script -->
<script setup>
	import InputSearch from "../components/InputSearch.vue";
	import Article from "../components/Article.vue";
	import ListOfHeading from "../components/ListOfHeading.vue"
	import { hendleNewLine } from "../utils/index.js";
	import { queryByPageId } from "../api/index.js";
	import { useRoute, useRouter } from "vue-router";
	import { watch, ref, onMounted } from "vue";

	const route = useRoute();
	const router = useRouter();

	const data = ref([]);
	const extract = ref([]);
	const headingList = ref([]);
	const isSearchable = ref(true);

	watch(
		() => route.params.id,
		async (newId, oldId) => {
			data.value = [];
			getPage();
		}
	);
	onMounted(() => {
		getPage();
	});

	async function getPage() {
		try {
			const response = await fetch(queryByPageId + route.params.id);
			const json = await response.json();
			console.log(json);
			console.log(json.query);
			if (!json.query) {
				isSearchable.value = false;
			}
			data.value = json.query.pages[route.params.id];

			hendleNewLine(data.value.extract, (result, ids) => {
				extract.value = result;
				headingList.value = ids;
			});
		} catch (error) {}
	}
</script>

<!-- template -->
<template>
	<main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
		<!-- main -->
		<section role="main" class="min-w-[100vw] max-w-[100vw]">
			<section role="search" class="w-[90%] mx-auto mt-10 md:w-[70vw]">
				<InputSearch></InputSearch>
			</section>
			<!-- article -->
			<Article
				class="z-10"
				:data="data"
				:extract="extract"
				:isSearchable="isSearchable"
			></Article>
			
			<ListOfHeading :headingList="headingList"></ListOfHeading>
			<!-- end article -->
		</section>
		<!-- end main -->
	</main>
</template>

<!-- style -->
<style scoped>
	.dot-enter-active,
	.dot-leave-active {
		transition: 0.5s ease;
	}

	.dot-enter-from,
	.dot-leave-to {
		opacity: 0;
		transform: rotate(180deg);
	}
</style>
