import { create } from 'zustand';

//интерфейс для стейта
interface State {
    activeId: number;
    setActiveId: (activeId: number) => void; //типизация функции
}

// создаем кастомный хук
export const useCategoryStore = create<State>()((set) => ({
    activeId: 1, // по умолчанию
    //функция для обновления activeId
    setActiveId: (activeId: number) => set({ activeId }), //activeId: activeID
}));
