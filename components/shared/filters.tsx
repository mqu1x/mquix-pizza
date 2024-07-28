'use client'

import { CheckboxFiltersGroup, RangeSlider, Title } from '@/components/shared'
import { Input } from '@/components/ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'
import { FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface Props {
	className?: string
}

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

export const Filters: FC<Props> = ({ className }) => {
	const router = useRouter()
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	const { ingredients, loading, onAddId, selectedIngredients } =
		useFilterIngredients()
	const [prices, setPrice] = useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceFrom')) || undefined,
	})

	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value,
		})
	}
	useEffect(() => {
		const filters = {
			...prices,
			sizes: Array.from(sizes),
			pizzaTypes: Array.from(pizzaTypes),
			selectedIngredients: Array.from(selectedIngredients),
		}

		const query = qs.stringify(filters, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, {
			scroll: false,
		})
	}, [prices, sizes, pizzaTypes, selectedIngredients, router])

	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				name='pizzaTypes'
				className='mt-5'
				title='Тип теста'
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
			/>

			<CheckboxFiltersGroup
				name='sizes'
				className='mt-5'
				title='Размеры'
				items={[
					{ text: '20см', value: '20' },
					{ text: '30см', value: '30' },
					{ text: '40см', value: '40' },
				]}
				onClickCheckbox={toggleSizes}
				selected={sizes}
			/>

			<div className=' mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(prices.priceTo)}
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom || 0, prices.priceTo || 1000]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
				/>
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Ингредиенты'
				limit={6}
				items={items}
				defaultItems={items.slice(0, 6)}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
				name='ingredients'
			/>
		</div>
	)
}
