// получение и хранение ингредиентов
'use client'

import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
	selectedIngredients: Set<string>
	onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)
	const [selectedIds, { toggle, add }] = useSet(new Set<string>([]))

	useEffect(() => {
		Api.ingredients
			.getAll()
			.then(items => {
				setLoading(true)
				setIngredients(items)
			})
			.catch(e => console.log(e))
			.finally(() => setLoading(false))
	}, [])

	const setSelectedIngredients = (ids: string[]) => {
		ids.forEach(selectedIds.add) //FIXME: last update 6:65:xx
	}

	return {
		ingredients,
		loading,
		onAddId: toggle,
		selectedIngredients: selectedIds,
	}
}
