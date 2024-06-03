<!-- script -->
<script setup>
	import { searchArticleUrl } from "../api/index.js";
	import { useRoute } from "vue-router";
	import { ref, onMounted } from "vue";

	const route = useRoute();

	onMounted(async () => {
		const response = await fetch(searchArticleUrl + route.params.query);
		console.log(route.params);
	});
</script>

<!-- template -->
<template>
	<h1>Lmao</h1>
</template>

<!-- style -->
<style scoped></style>
