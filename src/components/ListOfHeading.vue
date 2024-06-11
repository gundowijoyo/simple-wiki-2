<!-- script -->
<script setup>
	import DotIcon from "../components/icons/DotIcon.vue";
	import CrossIcon from "../components/icons/CrossIcon.vue";
	import HouseIcon from "../components/icons/HouseIcon.vue";
	import { RouterLink } from "vue-router";
	import { ref } from "vue";

	const isListOpen = ref(false);
	const props = defineProps(["headingList"]);

	function hendle_(text) {
		return text.replace(/_/g, " ");
	}
</script>

<!-- template -->
<template>
	<section role="fill of content">
		<div
			class="w-20 h-14 fixed bottom-10 right-8 flex items-center justify-evenly"
		>
			<button
				class="relative bg-stone-900 w-12 h-12 rounded-full text-2xl transition-colors duration-500 flex justify-center items-center z-10"
				type="button"
				@click="isListOpen = !isListOpen"
			>
				<Transition name="dot">
					<DotIcon v-if="!isListOpen" class="w-6 h-6 absolute"></DotIcon>
					<CrossIcon v-else class="w-6 h-6 absolute"></CrossIcon>
				</Transition>
			</button>
			<RouterLink
				to="/"
				class="absolute w-12 h-12 rounded-full bg-stone-900 transition-all duration-300 flex justify-center items-center"
				:class="isListOpen ? 'translate-x-[-3.76rem]' : 'rotate-180 scale-50'"
				onclick="window.scrollTo(0, 0)"
			>
				<HouseIcon class="w-6 h-6"></HouseIcon>
			</RouterLink>
		</div>

		<!-- list -->
		<section role="content list" class="fixed bottom-24 w-full h-fit">
			<div
				class="w-[80%] mx-auto bg-neutral-900 rounded-xl p-2 transition-all duration-500"
				:class="isListOpen ? 'h-[20rem] ' : 'h-0 opacity-0'"
			>
				<div
					v-if="headingList"
					class="w-auto h-full flex flex-col gap-1 overflow-scroll overflow-x-hidden text-neutral-200"
				>
					<a
						class="p-2 mr-3 text-sm bg-neutral-950 rounded-lg"
						href="#"
						@click="isListOpen = !isListOpen"
						>Pengenalan</a
					>
					<a
						v-for="list in props.headingList"
						class="p-2 mr-3 text-sm bg-neutral-950 rounded-lg"
						:href="'#' + list"
						@click="isListOpen = !isListOpen"
					>
						{{ hendle_(list) }}</a
					>
				</div>
			</div>
		</section>
	</section>
</template>

<!-- style -->
<style scoped>
	.dot-enter-active,
	.dot-leave-active {
		transition: 0.5s ease;
	}

	.dot-enter-from,
	.dot-leave-to {
		opacity: 0;
		transform: rotate(180deg);
	}
</style>
