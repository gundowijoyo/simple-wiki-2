<!-- script -->
<script setup>
	import { RouterLink, useRoute, useRouter } from "vue-router";
	import { searchArticleUrl } from "../api/index.js";
	import { ref, onMounted } from "vue";

	const route = useRoute();
	const router = useRouter();

	const inputValue = ref();
	const data = ref([]);
	const isLoad = ref(false);
	const isViewerActive = ref(false);

	onMounted(() => {
		let input = document.getElementById("input-1");
		input.addEventListener("keyup", e => {
			if (e.key == "Enter") {
				router.push(`/search/${input.value}`);
			} else {
				searchRequest();
			}
		});
	});

	/*
	 * Debouncing involves introducing a small delay before sending
	 * a request, allowing the user to finish their input before
	 * initiating the fetch.
	 */
	let debounceTimer;
	function searchRequest() {
		isLoad.value = true;
		data.value = [];

		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(async function () {
			try {
				// for canceling request
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

				// input = "" abort
				if (inputValue.value.length <= 0) controller.abort();
				data.value = fillterData;
				console.log(inputValue.value, fillterData);
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
		// if is a 20 frist text we stop it
		for (let i = 0; i < 15; i++) {
			resultArray.push(textArray[i]);
		}
		return resultArray.join(" ").replace(/<p/g, "<p class='inline'");
	}
</script>

<!-- template -->
<template>
	<div class="mt-5">
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
				class="h-10 text-xs w-full p-2 outline-none rounded-md bg-slate-100 tracking-wide cursor-text shadow-md"
				type="text"
				id="input-1"
				placeholder="Search articles here ..."
			/>
			<!-- end main input -->
			<div
				class="absolute top-2 right-3 text-zinc-300 grid grid-cols-1 grid-rows-1"
			>
				<Transition name="dump">
					<i
						v-if="!isLoad"
						class="bi bi-search text-slate-600 relative text-[20px] col-start-1 row-start-1"
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
					class="w-full absolute rounded-lg top-12 overflow-hidden z-50"
				>
					<section v-for="(info, index) in data" class="">
						<!-- router link -->
						<RouterLink
							:to="'/page/' + info.pageid"
							class="flex justify-between items-center gap-3 px-2 py-1 border-y border-zinc-800 rounded-md bg-slate-100 hover:bg-slate-200 cursor-pointer"
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
									class="w-14 h-10 rounded-md"
									:src="info.thumbnail.source"
									alt="info.title"
								/>
								<img
									v-if="!info.thumbnail"
									class="w-14 h-10 rounded-md"
									src="/imageNotFound.png"
									alt=""
								/>
							</div>
							<div
								class="w-full h-fit overflow-hidden flex justify-between gap-2"
							>
								<div>
									<h1 class="text-[0.76rem] font-bold">
										{{ info.title }}
									</h1>
									<div class="text-[0.48rem]">
										<span
											class="inline"
											v-html="getFristText(info.extract)"
										></span>
										<span>...</span>
									</div>
								</div>
								<div class="flex items-center">
									<i class="bi bi-box-arrow-up-right text-xs"></i>
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
		transition: opacity 300ms ease;
	}
	.dump-enter-from,
	.dump-leave-to {
		opacity: 0;
	}
</style>
