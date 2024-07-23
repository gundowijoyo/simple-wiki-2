<!-- script -->
<script setup>
	const props = defineProps(["data", "extract", "isSearchable"]);
</script>

<!-- template -->
<template>
	<article
		class="mt-10 w-[98vw] h-fit min-h-screen mx-auto text-sm p-2 rounded-xl overflow-hidden bg-[length:200vw_100vh] grid grid-cols-1 grid-rows-1 relative bg-[hsla(0,0%,9.1%,0.2)] md:w-[70vw]"
	>
		<Transition>
			<div
				v-if="props.data.extract && isSearchable"
				class="h-full w-full overflow-clip text-white overflow-x-hidden col-start-1 row-start-1 z-50"
			>
				<section role="thumbnail">
					<h2 class="text-3xl font-black text-neutral-300 text-center mt-5">
						{{ props.data.title }}
					</h2>
					<div class="grid grid-rows-1 grid-cols-1">
						<Transition>
							<img
								v-if="props.data.thumbnail"
								class="w-full aspect-[4/3] p-4 rounded-3xl col-start-1 row-start-1 brightness-75"
								:src="props.data.thumbnail.source"
								alt=""
							/>
							<br v-else-if="!props.data.thumbnail" />
						</Transition>
					</div>
				</section>

				<section role="content" class="grid grid-cols-1 grid-rows-1">
					<div class="col-start-1 row-start-1">
						<h3
							id="pengenalan"
							class="mx-1 text-2xl mt-3 mb-1 text-neutral-300 font-semibold"
						>
							Pengenalan
						</h3>
						<div v-html="props.extract" class="text-s mx-1 text-neutral-300">
						</div>
					</div>
				</section>
			</div>

			<!-- skeleton effect -->
			<div
				v-else-if="!props.data.extract && isSearchable"
				class="w-full h-screen col-start-1 row-start-1"
			>
				<div
					class="w-full h-full bg-neutral-900 opacity-80 rounded-lg flex justify-center items-center animate-pulse"
				>
					<div
						class="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"
					></div>
				</div>
			</div>
			<!-- end skeleton effect -->
			<!-- 404 -->
			<div
				v-else
				class="w-full h-full flex flex-col items-center justify-center col-start-1 row-start-1 bg-[hsla(0,0%,8%,0.6)] p-2 backdrop-blur-sm rounded-xl"
			>
				<h1
					class="mix-blend-difference text-4xl text-neutral-300 font-semibold"
				>
					404
				</h1>
				<h1 class="mix-blend-difference text-xl text-neutral-300 font-semibold">
					Not Found
				</h1>
			</div>
			<!-- end 404 -->
		</Transition>
	</article>
</template>

<!-- style -->
<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
