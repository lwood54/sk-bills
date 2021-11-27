<script lang="ts">
	import type { Bill } from '$lib/types/bills';
	import BillItem from './bill-item.svelte';
	export let bills: Bill[];
	console.log('bills inside component', bills);
</script>

<h3>Bills List</h3>
{#each bills as billInfo}
	<BillItem {billInfo} />
{/each}
