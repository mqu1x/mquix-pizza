import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
    return (
        <h1>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar />

            <Container className='pb-14 mt-10'>
                <div className='flex gap-[60px]'>
                    {/* Фильтрация */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>Список пицц</div>
                    </div>
                </div>
            </Container>
        </h1>
    );
}
