<!-- script -->
<script setup>
	import { RouterLink, useRouter } from "vue-router";
	import { searchArticleUrl } from "../api/index.js";
	import { ref } from "vue";

	const router = useRouter();

	const inputValue = ref();
	const data = ref([]);
	const isLoad = ref(false);
	const isSearchable = ref(false);

	/*
	 * Debouncing involves introducing a small delay before sending
	 * a request, allowing the user to finish their input before
	 * initiating the fetch.
	 */
	let debounceTimer;
	function searchRequest() {
		isLoad.value = true;
		data.value = [];
		isSearchable.value = false;

		let input = document.getElementById("input-1");
		input.addEventListener("keyup", e => {
			if (e.key == "Enter" && input.value.split(" ").join("") != "") {
				router.push({ path: "/search", query: { q: input.value } });
			}
		});

		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(async function () {
			try {
				const controller = new AbortController();
				const signal = controller.signal;

				const response = await fetch(searchArticleUrl + inputValue.value, {
					signal
				});
				const json = await response.json();

				// fillter
				const fillterData = [];
				for (let key in json.query.pages) {
					const title = json.query.pages[key].title.toLowerCase();
					if (title.includes(inputValue.value.toLowerCase())) {
						fillterData.push(json.query.pages[key]);
					}
				}
				const buffer = [];
				for (let i = 0; i < fillterData.length; i++) {
					if (i < 6) {
						buffer.push(fillterData[i]);
					}
				}

				// input = "" abort
				if (inputValue.value.length <= 0) controller.abort();
				data.value = buffer;
				isSearchable.value = true;
			} catch (error) {
			} finally {
				isLoad.value = false;
			}
		}, 400);
	}

	/*
	 * extraxt value have a lot of text so i need to be get the
	 * frits one
	 */
	function getFristText(text) {
		const textArray = text.split(" ");
		const resultArray = [];
		for (let i = 0; i < 15; i++) {
			resultArray.push(textArray[i]);
		}
		return resultArray.join(" ").replace(/<p/g, "<p class='inline'");
	}
</script>

<!-- template -->
<template>
	<div class="flex gap-2 items-center relative">
		<section role="search" class="relative w-full">
			<input
				v-model="inputValue"
				class="h-12 w-full text-sm w-full p-4 outline-none rounded-lg bg-[hsl(0,0%,7%)] text-neutral-400 tracking-wide cursor-text shadow-md placeholder-[hsl(0,0%,63.9%)]"
				type="text"
				id="input-1"
				autocomplete="off"
				@keyup="searchRequest()"
				placeholder="Search articles here..."
			/>
			<div
				class="absolute top-3 right-3 text-zinc-300 grid grid-cols-1 grid-rows-1"
			>
				<Transition>
					<i
						v-if="!isLoad"
						class="bi bi-search text-zinc-500 relative text-[20px] col-start-1 row-start-1"
					></i>
					<i
						v-else
						class="bi bi-search relative text-[20px] col-start-1 row-start-1"
					></i>
				</Transition>
			</div>
		</section>
		<!-- end input -->

		<!-- search viewer-->
		<Transition>
			<div
				v-if="isSearchable"
				class="w-full absolute rounded-lg top-14 overflow-hidden z-50 flex flex-col gap-1 bg-[hsla(0,0%,9%,0.6)] p-2 backdrop-blur-sm"
			>
				<section role="link" v-for="(info, index) in data">
					<RouterLink
						:to="'/page/' + info.pageid"
						class="flex justify-between items-center gap-3 p-2 rounded-md bg-[hsl(0,0%,9%)]"
						@click="
							() => {
								inputValue = '';
								isSearchable = false;
							}
						"
					>
						<section rule="thumbnail">
							<img
								v-if="info.thumbnail"
								class="w-14 h-10 rounded-md brightness-75"
								:src="info.thumbnail.source"
								alt="info.title"
							/>
							<img
								v-if="!info.thumbnail"
								class="w-14 h-10 rounded-md brightness-75"
								src="/imageNotFound.png"
								alt=""
							/>
						</section>
						<section
							rule="article info"
							class="w-full h-fit overflow-hidden flex justify-between gap-2"
						>
							<div>
								<h1 class="text-[0.76rem] font-bold text-zinc-300">
									{{ info.title }}
								</h1>
								<div class="text-[0.48rem]">
									<span
										class="inline text-zinc-300"
										v-html="getFristText(info.extract)"
									></span>
									<span>...</span>
								</div>
							</div>
							<div class="flex items-center">
								<i class="bi bi-box-arrow-up-right text-xs text-zinc-300"></i>
							</div>
						</section>
					</RouterLink>
				</section>
			</div>
		</Transition>
		<!-- end search viewer-->
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
