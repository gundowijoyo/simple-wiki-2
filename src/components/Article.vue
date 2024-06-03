<!-- script -->
<script setup>
	const props = defineProps(["data", "extract"]);
</script>

<!-- template -->
<template>
	<article
		class="mt-10 w-[98vw] h-fit mx-auto text-sm p-2 rounded-lg overflow-hidden p-2 bg-[hsla(210,40%,96.1%,0.0)] bg-contain"
		style="background-image: url(&quot;/article-bg.jpg&quot;)"
	>
		<div class="h-full w-full overflow-clip text-white overflow-x-hidden">
			<div class="mx-1">
				<h1 class="text-xl mt-2 font-black text-slate-900 text-center">
					About
				</h1>
				<h2 class="text-3xl font-black text-slate-950 text-center">
					{{ props.data.title }}
				</h2>
				<div class="grid grid-rows-1 grid-cols-1">
					<Transition>
						<img
							v-if="props.data.thumbnail"
							class="w-full aspect-[4/3] p-4 rounded-3xl col-start-1 row-start-1"
							:src="props.data.thumbnail.source"
							alt=""
						/>
						<br v-else />
					</Transition>
				</div>
			</div>
			<!-- extract data -->
			<div class="grid grid-cols-1 grid-rows-1">
				<Transition>
					<div v-if="props.data.extract" class="col-start-1 row-start-1">
						<h3
							id="pengenalan"
							class="mx-1 text-2xl mt-3 mb-1 text-slate-900 font-semibold"
						>
							Pengenalan
						</h3>
						<div
							v-html="props.extract"
							class="text-s mx-1 text-slate-900"
						></div>
					</div>
					<div
						v-else
						class="w-auto h-screen mx-1 rounded-xl col-start-1 row-start-1"
					>
						<div
							class="w-[14rem] h-[2rem] mx-1 mt-3 mb-1 rounded-md bg-neutral-900 animate-pulse"
						></div>
						<div
							class="w-auto h-[50rem] mx-1 mt-1 rounded-md bg-neutral-900 animate-pulse"
						></div>
					</div>
				</Transition>
			</div>
			<!-- end extract data-->
		</div>
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
