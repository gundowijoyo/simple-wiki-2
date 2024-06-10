<!-- script -->
<script setup>
	import { RouterLink, useRouter } from "vue-router";
	import { searchArticleUrl } from "../api/index.js";
	import { ref } from "vue";

	const router = useRouter();

	const inputValue = ref();
	const data = ref([]);
	const isLoad = ref(false);
	const isViewerActive = ref(false);

	/*
	 * Debouncing involves introducing a small delay before sending
	 * a request, allowing the user to finish their input before
	 * initiating the fetch.
	 */
	let debounceTimer;
	function searchRequest() {
		isLoad.value = true;
		data.value = [];

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
				const rawDatas = await response.json();

				// filltering output data
				const fillterData = [];
				for (let key in rawDatas.query.pages) {
					const title = rawDatas.query.pages[key].title.toLowerCase();
					if (title.includes(inputValue.value.toLowerCase())) {
						fillterData.push(rawDatas.query.pages[key]);
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
				console.log(inputValue.value, fillterData, buffer);
				isViewerActive.value = true;
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
	<div class="">
		<form
			class="flex gap-2 items-center relative"
			action="search"
			autocomplete="off"
			role="presentation"
			method="get"
			accept-charset="utf-8"
		>
			<!-- decoy for non autocomplete -->
			<input
				autocomplete="false"
				name="hidden"
				type="text"
				style="display: none"
			/>
			<!-- end decoy-->
			<!-- main input -->
			<input
				v-model="inputValue"
				class="h-12 text-sm w-full p-4 outline-none rounded-lg bg-[hsl(0,0%,7%)] text-zinc-400 tracking-wide cursor-text shadow-md placeholder-[hsl(240,5%,64.9%)]"
				type="text"
				id="input-1"
				@keyup="searchRequest()"
				placeholder="Search articles here..."
			/>
			<!-- end main input -->
			<div
				class="absolute top-3 right-3 text-zinc-300 grid grid-cols-1 grid-rows-1"
			>
				<Transition name="dump">
					<i
						v-if="!isLoad"
						class="bi bi-search text-zinc-500 relative text-[20px] col-start-1 row-start-1"
					></i>
					<i
						v-else
						class="bi bi-search relative text-[20px] pulse col-start-1 row-start-1"
					></i>
				</Transition>
			</div>
			<!-- end input -->

			<!-- search viewer-->
			<Transition name="sv">
				<div
					v-if="isViewerActive"
					class="w-full absolute rounded-lg top-14 overflow-hidden z-50 flex flex-col gap-1"
				>
					<section v-for="(info, index) in data" class="">
						<!-- router link -->
						<RouterLink
							:to="'/page/' + info.pageid"
							class="flex justify-between items-center gap-3 p-2 rounded-md bg-[hsl(0,0%,9%)]"
							:class="{
								'border-t-0 rounded-t-0': index == 0,
								'border-b-0 rounded-b-0': index == data.length - 1
							}"
							@click="
								() => {
									inputValue = '';
									isViewerActive = false;
								}
							"
						>
							<div class="">
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
							</div>
							<div
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
							</div>
						</RouterLink>
						<!-- router link -->
					</section>
				</div>
			</Transition>
			<!-- end search viewer-->
		</form>
	</div>
</template>

<!-- style -->
<style scoped>
	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}

	.pulse {
		animation: pulse 2s infinite;
	}

	.sv-enter-active,
	.sv-leave-active {
		transition: opacity 300ms ease;
	}
	.sv-enter-from,
	.sv-leave-to {
		opacity: 0;
	}

	.dump-enter-active,
	.dump-leave-active {
		transition: opacity 500ms ease;
	}
	.dump-enter-from,
	.dump-leave-to {
		opacity: 0;
	}
</style>
