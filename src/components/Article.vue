<!-- script -->
<script setup>
	const props = defineProps(["data", "extract"]);
</script>

<!-- template -->
<template>
	<article
		class="mt-10 w-[98vw] h-fit mx-auto text-sm p-2 rounded-xl overflow-hidden p-2 bg-[length:200vw_100vh] grid grid-cols-1 grid-rows-1"
		style="background-image: url(&quot;/article-bg.jpg&quot;)"
	>
		<Transition>
			<div
				v-if="props.data.extract"
				class="h-full w-full overflow-clip text-white overflow-x-hidden col-start-1 row-start-1"
			>
				<div class="mx-1">
					<h2 class="text-3xl font-black text-slate-950 text-center">
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
				</div>
				<!-- extract data -->
				<div class="grid grid-cols-1 grid-rows-1">
					<div class="col-start-1 row-start-1">
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
				</div>
				<!-- end extract data-->
			</div>

			<!-- skeleton effect -->
			<div
				v-else
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
