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
		<div class="min-h-screen">
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
		<div>
			<footer class="w-screen min-h-[300px] mt-10">
				<div class="md:w-[70vw] mx-auto p-5 text-[#cbcbcb]">
					<section
						role="logo"
						class="w-full h-fit flex justify-start items-center gap-3"
					>
						<img class="w-8 aspect-square rounded-md" src="/logo.png" alt="" />
						<h1
							class="text-2xl font-semibold tracking-tighter drop-shadow-2xl group cursor-pointer drop-shadow-md"
						>
							Simple Wiki
						</h1>
					</section>
					<p class="mt-2 leading-4">
						<i>`More than creations just make new thinks`</i>
						- nobody.
					</p>
					<p class="my-5">Contact & Social media :</p>
					<!-- social media -->
					<section
						role="sosial media"
						class="w-auto h-full bg-[hsla(240,5.9%,4%,0.5)] rounded-xl flex justify-evenly items-center text-xl text-[hsla(0,0%,70.1%,0.8)] md:text-2xl"
					>
						<a
							class="cursor-pointer"
							href="https://www.instagram.com/aryadewanggapuja"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="transition-colors duration-300 hover:text-[#656565]">
								<i class="bi bi-envelope-at-fill"></i>
							</span>
						</a>
						<a
							class="cursor-pointer"
							href="https://www.instagram.com/aryadewanggapuja"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="transition-colors duration-300 hover:text-[#656565]">
								<i class="bi bi-instagram"></i>
							</span>
						</a>
						<a
							class="cursor-pointer"
							href="https://www.facebook.com/aryadewanggapuja"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="transition-colors duration-300 hover:text-[#656565]">
								<i class="bi bi-facebook"></i>
							</span>
						</a>
						<a
							class="cursor-pointer"
							href="https://github.com/ka-shifuka"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="transition-colors duration-300 hover:text-[#656565]">
								<i class="bi bi-github"></i>
							</span>
						</a>
						<a
							class="cursor-pointer"
							href="https://www.threads.net/@aryadewanggapuja"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="transition-colors duration-300 hover:text-[#656565]">
								<i class="bi bi-threads-fill"></i>
							</span>
						</a>
					</section>
					<div class="flex justify-center mt-10 text-sm">
						&copy; 2024 arya dewangga puja | creations
					</div>
				</div>
			</footer>
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
