<script>
	import Button from '$lib/components/button3d.svelte';

	// Props pour personnaliser chaque box
	export let offer = {
		title: 'Vitrine 3D',
		price: '590€ HT',
		priceNote: '(à partir de)',
		deliveryTime: 'Livraison en 8 jours',
		description: 'Description par défaut',
		isPopular: true,
		theme: 'purple',
		features: []
	};
</script>

<div class="BoxPricing BoxPricing-{offer.theme}">
	<div class="pricing-header pricing-header-{offer.theme} relative">
		<div class="bg-opacity"></div>
		<div class="flex flex-col">
			<div class="flex justify-between items-center">
				<div class="box3d-text relative">
					<p class="relative z-15">{offer.title}</p>
					<span>{offer.title}</span>
				</div>
				{#if offer.isPopular}
					<p class="badge-pop">Populaire</p>
				{/if}
			</div>
			<p class="price text-white pb-2.5">{offer.price} <span>{offer.priceNote}</span></p>
			<div class="pb-5">
				<span class="badge-date">{offer.deliveryTime}</span>
			</div>
			<p class="pricing-content pb-5">
				{offer.description}
			</p>
			<div class="boxButtonPrice">
				<Button />
			</div>
		</div>
	</div>
	<div class="pricing-details">
		<ul>
			{#each offer.features as feature}
				{#if feature === '---'}
					<div class="stroke-appearance"></div>
				{:else}
					<li>
						<img src="/icons/check.svg" alt="Icon Check" />
						<span>{feature}</span>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
	.BoxPricing {
		width: 100%;
		/* transform: rotate(-10deg); */
	}

	@media screen and (min-width: 1024px) {
		.BoxPricing {
			max-width: 414px;
		}
	}

	@media screen and (min-width: 1280px) {
		.BoxPricing {
			max-width: 444px;
		}
	}

	@media screen and (min-width: 1980px) {
		.BoxPricing {
			max-width: 474px;
		}
	}

	.pricing-header {
		position: relative;
		padding: 1.25rem 1rem;
		background: none;
		border-radius: 27px 27px 0 0;
		overflow: hidden;
	}

	.pricing-header > .flex {
		position: relative;
		z-index: 1;
	}

	.pricing-header::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		z-index: 0;
		border-radius: 27px 27px 0 0;
		background-image: linear-gradient(225deg, #d57d99 0%, #4729cb 49%, #4729cb 100%);
		transform: rotate(0deg);
		animation: rotate-bg 12s linear infinite;
	}

	@keyframes rotate-bg {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.pricing-header-pink::before {
		background-image: linear-gradient(225deg, #bed37b 0%, #cd456b 49%, #cd456b 100%);
	}

	.bg-opacity {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(255, 255, 255, 8%);
		border-radius: 27px 27px 100px 100px;
	}

	.box3d-text p {
		-webkit-text-stroke: 1px rgb(255, 255, 255, 0.7);
	}

	.box3d-text p,
	.box3d-text span {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.3rem;
	}

	@media screen and (max-width: 330px) {
		.box3d-text p,
		.box3d-text span {
			font-size: 1.7rem;
		}
	}

	.box3d-text span {
		color: transparent;
		top: 2px;
		left: 2px;
		position: absolute;
		text-wrap: nowrap;
		-webkit-text-stroke: 1px #ffffff;
	}

	.badge-pop {
		background-image: linear-gradient(90deg, #000000 0%, #000000 74%, #666666 100%);
		color: #ffffff;
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 0.9rem;
		padding: 0.15rem 0.5rem;
		border-radius: 27px;
		border: 1px solid #ffffff;
	}

	.price,
	.price span {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
	}

	.price {
		font-family: 'Montserrat', sans-serif;
		font-size: 2.7rem;
		font-weight: bold;
	}

	@media screen and (max-width: 330px) {
		.price {
			font-size: 2.2rem;
		}
	}

	.price span {
		font-family: 'Manrope', sans-serif;
		font-size: 0.8rem;
	}

	.badge-date {
		padding: 0.25rem 1.8rem;
		border-radius: 83px;
		background-color: white;
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		width: fit-content;
		font-size: 0.9rem;
	}

	.pricing-content {
		font-family: 'Manrope', sans-serif;
		font-size: 15px;
		color: white;
		font-weight: bold;
		text-align: justify;
	}

	@media screen and (min-width: 1980px) {
		.pricing-content {
			font-size: 1.02rem;
		}
	}

	.boxButtonPrice {
		display: flex;
		justify-content: center;
	}

	.pricing-details {
		background-color: #fffefe;
		border-radius: 0 0 20px 20px;
	}

	ul {
		list-style: none;
		padding: 1.5rem 31px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	li {
		display: flex;
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		gap: 31px;
		font-size: 15px;
		color: #000000;
	}

	.stroke-appearance {
		background-image: linear-gradient(
			90deg,
			#cd456b 0%,
			#cd456b 4%,
			#fffefe 4%,
			#fffefe 10%,
			#cd456b 10%,
			#cd456b 18%,
			#fffefe 18%,
			#fffefe 24%,
			#cd456b 24%,
			#cd456b 30%,
			#fffefe 30%,
			#fffefe 36%,
			#cd456b 36%,
			#cd456b 42%,
			#fffefe 42%,
			#fffefe 48%,
			#cd456b 48%,
			#cd456b 53%,
			#fffefe 53%,
			#fffefe 59%,
			#cd456b 59%,
			#cd456b 66%,
			#fffefe 66%,
			#fffefe 72%,
			#cd456b 72%,
			#cd456b 78%,
			#fffefe 78%,
			#fffefe 84%,
			#cd456b 84%,
			#cd456b 88%,
			#fffefe 88%,
			#fffefe 100%
		);
		height: 2px;
		width: 64%;
		margin-left: 35px;
	}
</style>
