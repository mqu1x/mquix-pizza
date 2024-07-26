'use client';

import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from '@/components/shared';
import { Input } from '@/components/ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loading } = useFilterIngredients();

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    return (
        <div className={cn('', className)}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='2' />
            </div>

            <div className=' mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={3000} defaultValue={0} />
                    <Input type='number' placeholder='1000' min={100} max={3000} />
                </div>

                <RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />
            </div>

            <CheckboxFiltersGroup
                className='mt-5'
                title='Ингредиенты'
                limit={6}
                items={items}
                defaultItems={items.slice(0, 6)}
                loading={loading}
            />
        </div>
    );
};
