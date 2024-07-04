import { Container, Filters, Title, TopBar, ProductCart } from '@/components/shared';

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
                        <div className='flex flex-col gap-16'>
                            <ProductCart
                                id={1}
                                name={'Пицца Сырная'}
                                price={300}
                                imageUrl={
                                    'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif'
                                }
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </h1>
    );
}
