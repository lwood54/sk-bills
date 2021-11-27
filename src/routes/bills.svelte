<script context="module">
	import { getBills } from '$lib/api';
	import { tempUserId } from '$lib/constants/bills';
	export async function load() {
		console.log('RUNNING HERE?');
		const res = await getBills(tempUserId);
		console.log('bills inside loader', res.data);
		const bills = res.data.bills;
		return {
			props: {
				bills
			}
		};
	}
</script>

<script lang="ts">
	import BillsList from '$lib/components/Bills/bills-list.svelte';
	import { currentPath, fromPath } from '../stores/nav';
	import type { Bill } from '$lib/types/bills';
	export let bills: Bill[];

	console.log('bills inside PAGE', bills);
	console.log('from === ???', $fromPath);
	console.log('current', $currentPath);
</script>

<h1>Bills Page</h1>
<BillsList {bills} />
