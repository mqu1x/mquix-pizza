// получение и хранение ингредиентов
'use client';

import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useState, useEffect } from 'react';

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Api.ingredients
            .getAll()
            .then((items) => {
                setLoading(true);
                setIngredients(items);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    return { ingredients, loading };
};
