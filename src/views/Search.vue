<!-- script -->
<script setup>
	import { gsrSearchUrl } from "../api/index.js";
	import { useRoute, useRouter } from "vue-router";
	import { watch, ref, onMounted } from "vue";

	const route = useRoute();
	const router = useRouter();

	const data = ref([]);
	const isLoad = ref(false);
	const isSearchable = ref(true);

	watch(
		() => route.query.q,
		async (oldValue, newValue) => {
			isLoad.value = false;
			isSearchable.value = true;
			getData();
			console.log("hello watch");
		}
	);

	onMounted(async () => {
		getData();
	});

	async function getData() {
		try {
			const response = await fetch(gsrSearchUrl + route.query.q);
			const json = await response.json();

			console.log(json);
			if (!json.query) {
				isSearchable.value = false;
			}
			data.value = json.query.pages;
		} catch (e) {
		} finally {
			isLoad.value = true;
		}
	}

	function getFristText(text) {
		const textArray = text.split(" ");
		const resultArray = [];
		for (let i = 0; i < 15; i++) {
			resultArray.push(textArray[i]);
		}
		return resultArray.join(" ").replace(/<p/g, "<p class='inline'");
	}

	function search() {
		let input = document.getElementById("input-2");
		input.addEventListener("keyup", e => {
			if (e.key == "Enter" && input.value.split(" ").join("") != "") {
				router.push({ path: "/search", query: { q: input.value } });
				console.log(input.value);
			}
		});
	}
</script>

<!-- template -->
<template>
	<div class="col-start-1 row-start-1">
		<section role="search" class="w-[90%] mx-auto md:w-[70vw]">
			<input
				v-model="inputValue"
				class="h-12 w-full text-sm w-full p-4 outline-none rounded-lg bg-[hsl(0,0%,7%)] text-neutral-400 tracking-wide cursor-text border-2 border-[#cbcbcb] shadow-md placeholder-[hsl(0,0%,63.9%)]"
				type="text"
				id="input-2"
				autocomplete="off"
				@keyup="search()"
				placeholder="Search articles here..."
			/>
		</section>
		<div class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1">
			<Transition>
				<div
					v-if="isLoad && isSearchable"
					class="w-[90%] min-h-[80vh] mx-auto my-5 flex flex-col justify-evenly col-start-1 gap-2 row-start-1 bg-[hsla(0,0%,8%,0.6)] p-2 backdrop-blur-sm rounded-xl md:w-[70vw]"
				>
					<section v-for="(info, index) in data">
						<!-- router link -->
						<RouterLink
							:to="'/simplewiki-page/page/' + info.pageid"
							class="flex justify-between items-center gap-3 p-2 rounded-md cursor-pointer bg-[hsl(0,0%,8%)]"
						>
							<section role="thumbnail">
								<img
									v-if="info.thumbnail"
									class="w-14 h-10 rounded-md brightness-75 md:w-16 md:h-12"
									:src="info.thumbnail.source"
									alt="info.title"
								/>
								<img
									v-if="!info.thumbnail"
									class="w-14 h-10 rounded-md brightness-75 md:w-16 md:h-12"
									src="/imageNotFound.png"
									alt=""
								/>
							</section>

							<section
								role="article info"
								class="w-full h-fit overflow-hidden flex justify-between gap-2"
							>
								<div>
									<h1
										class="text-[0.76rem] font-bold text-neutral-400 md:text-[1rem]"
									>
										{{ info.title }}
									</h1>
									<div class="text-[0.48rem] text-neutral-400 md:text-sm">
										<span
											class="inline"
											v-html="getFristText(info.extract)"
										></span>
										<span>...</span>
									</div>
								</div>
								<div class="flex items-center">
									<i
										class="bi bi-box-arrow-up-right text-xs text-stone-400"
									></i>
								</div>
							</section>
						</RouterLink>
						<!-- router link -->
					</section>
				</div>

				<!-- skeleton -->
				<div
					v-else-if="!isLoad && isSearchable"
					class="w-[90%] h-[80vh] max-h-[50rem] mx-auto my-5 flex flex-col items-center justify-center gap-2 col-start-1 row-start-1 bg-[hsla(0,0%,8%,0.6)] p-2 backdrop-blur-sm rounded-xl md:w-[70vw]"
				>
					<div
						class="w-20 aspect-square border-8 border-neutral-300 border-t-transparent animate-spin rounded-full"
					></div>
				</div>
				<!-- end skeleton -->

				<!-- 404 -->
				<div
					v-else
					class="w-[90%] h-[80vh] max-h-[50rem] mx-auto my-5 flex flex-col items-center justify-center col-start-1 row-start-1 bg-[hsla(0,0%,8%,0.6)] p-2 backdrop-blur-sm rounded-xl md:w-[70vw]"
				>
					<h1
						class="mix-blend-difference text-4xl text-neutral-300 font-semibold"
					>
						404
					</h1>
					<h1
						class="mix-blend-difference text-xl text-neutral-300 font-semibold"
					>
						Not Found
					</h1>
				</div>
				<!-- 404 -->
			</Transition>
		</div>
	</div>
</template>

<!-- style -->
<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 500ms ease;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
