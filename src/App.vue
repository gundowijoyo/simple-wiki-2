<!-- script -->
<script setup>
	import NavHeader from "./components/NavHeader.vue";
	import Background from "./components/Background.vue";
	import LoadingContainer from "./components/LoadingContainer.vue";
	import { ref, onMounted } from "vue";
	import { RouterView } from "vue-router";

	const isDomLoaded = ref(false);
	onMounted(() => {
		window.addEventListener("load", function () {
			setTimeout(function () {
				isDomLoaded.value = true;
			}, 1000);
		});
	});
</script>

<!-- template -->
<template>
	<!-- utilities-->
	<Background></Background>
	<LoadingContainer :isDomLoaded="isDomLoaded"></LoadingContainer>
	<!-- end utilities-->
	<!-- main components -->
	<div class="min-h-screen flex flex-col justify-between">
		<!-- container -->
		<div class="">
			<header>
				<NavHeader></NavHeader>
			</header>

			<!-- router view -->
			<main id="view" class="grid grid-cols-1 grid-rows-1">
				<RouterView v-slot="{ Component }">
					<Transition name="route"> <Component :is="Component" /> </Transition>
				</RouterView>
			</main>
			<!-- end router view -->
		</div>
		<!-- end container -->
		<!-- container -->
		<div class="">
			<div class="w-screen h-20 text-white mt-10">
				<h1 class="text-center">simplewiki</h1>
			</div>
		</div>
		<!-- end container -->
	</div>
	<!-- end main components-->
</template>

<!-- style -->
<style scoped>
	/* we will explain what these classes do next! */
	.route-enter-active,
	.route-leave-active {
		transition: 0.7s ease;
	}

	.route-enter-from,
	.route-leave-to {
		opacity: 0;
		transform: translateY(200px) scale(0.95);
	}
</style>
