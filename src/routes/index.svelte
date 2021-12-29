<script lang="ts">
	import supabase from '$lib/sb';

	const getData = async () => {
		const { data, error } = await supabase.from('bills').select();
		if (error) throw new Error(error.message);
		console.log('data', data);
		return data;
	};
</script>

<h1>Bills</h1>
{#await getData()}
	<p>Fetching data...</p>
{:then data}
	{#each data as bill}
		<li>Name: {bill.name}</li>
		<li>Balance: {bill.balance}</li>
		<li>Interest: {bill.interestRate}</li>
		<li>Day Due: {bill.dayDue}</li>
		<li>Payment: {bill.payment}</li>
		<hr />
	{/each}
{:catch error}
	<p>Something went wrong while fetching the data:</p>
	<pre>{error}</pre>
{/await}
