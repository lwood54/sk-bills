<script lang="ts">
	import { colors } from '$lib/constants/colors';

	import type { Bill } from '$lib/types/bills';
	import Card from '../BaseComponents/card.svelte';
	import Inline from '../BaseComponents/inline.svelte';
	export let billInfo: Bill;
</script>

<Card --card-color={colors.$blue500}>
	<h4 class="item full">Bill: {billInfo.name}</h4>
	<Inline --flex-wrap="wrap">
		<div class="item half">
			<h4>Balance</h4>
			${billInfo.balance}
		</div>
		<div class="item half">
			<h4>Day Due</h4>
			{billInfo.dayDue}
		</div>
		<div class="item half">
			<h4>Default Payment</h4>
			${billInfo.defaultPayment}
		</div>
		<div class="item half">
			<h4>Interest</h4>
			{billInfo.interest}%
		</div>
	</Inline>
</Card>

<style lang="scss">
	@use 'src/styles/_colors' as *;
	@use 'src/styles/_sizes' as *;

	// .bill-card {
	// 	display: flex;
	// 	box-sizing: border-box;
	// 	flex-wrap: wrap;
	// 	width: $w-s;
	// 	height: auto;
	// }

	.item {
		text-align: center;
	}
	.full {
		width: $w-full;
	}
	.half {
		width: $w-half;
	}
</style>
