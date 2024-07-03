import { cn } from '@/lib/utils';
import { ArrowDownUp } from 'lucide-react';
import { FC } from 'react';

interface Props {
    className?: string;
}

export const SortPopup: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
                className
            )}
        >
            <ArrowDownUp size={16} />
            <b>Сортировка:</b>
            <b className='text-primary'>популярное</b>
        </div>
    );
};
