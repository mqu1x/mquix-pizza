import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
    return (
        <h1>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar />

            <Container className='pb-14 mt-10'>
                <div className='flex gap-[80px]'>
                    {/* Фильтрация */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList
                                title='Пиццы'
                                items={[
                                    {
                                        id: 1,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 7,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 8,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 9,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 10,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 11,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 12,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 13,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 14,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                ]}
                                categoryId={1}
                                className=''
                            />
                            <ProductsGroupList
                                title='Завтраки'
                                items={[
                                    {
                                        id: 1,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 7,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 8,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 9,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 10,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 11,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 12,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 13,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                    {
                                        id: 14,
                                        name: 'Пицца с сыром',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                                        price: 300,
                                        items: [{ price: 300 }],
                                    },
                                ]}
                                categoryId={2}
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </h1>
    );
}
