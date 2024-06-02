<!-- script -->
<script setup>
	import InputSearch from "../components/InputSearch.vue";
	import ListOfHeading from "../components/ListOfHeading.vue";
	import Article from "../components/Article.vue";
	import { hendleNewLine } from "../utils/hendleNewLine.js";
	import { queryByPageId, parseByPageId } from "../api/index.js";
	import { useRoute } from "vue-router";
	import { ref, onMounted } from "vue";

	const route = useRoute();

	const data = ref([]);
	const extract = ref([]);
	const headingList = ref([]);

	onMounted(async () => {
		try {
			const response = await fetch(queryByPageId + route.query.id);
			const rawData = await response.json();
			console.log(rawData.query.pages);
			data.value = rawData.query.pages[route.query.id];

			hendleNewLine(data.value.extract, (result, ids) => {
				extract.value = result;
				headingList.value = ids;
			});
		} catch (error) {}
	});
</script>

<!-- template -->
<template>
	<main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
		<!-- main -->
		<section role="main" class="min-w-[100vw] max-w-[100vw]">
			<section class="w-[90%] mx-4 mt-10">
				<InputSearch></InputSearch>
			</section>
			<!-- article -->
			<Article :data="data" :extract="extract"></Article>
			<!-- end article -->

			<!-- utils -->
			<ListOfHeading
				v-if="data.extract"
				:headingList="headingList"
			></ListOfHeading>
			<!-- end utils -->
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
