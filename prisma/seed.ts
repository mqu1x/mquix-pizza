// для автоматической генерации данных в базе данных

import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;

// генерация данных
const up = async () => {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'John Doe',
                email: 'CfQ9j@example.com',
                password: hashSync('12345', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                email: 'admin@a.com',
                password: hashSync('12345', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.ingredient.createMany({
        data: ingredients,
    });

    await prisma.product.createMany({
        data: products,
    });

    //привязать к ним вариации
    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пепперони фреш',
            imageUrl:
                'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Сырная',
            imageUrl:
                'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Чоризо фреш',
            imageUrl:
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            },
        },
    });

    // await prisma.productItem.createMany({
    //     data: [
    //         { productId: pizza1.id, price: randomNumber(290, 600), size: 20, pizzaType: 1 },
    //         { productId: pizza1.id, price: randomNumber(290, 600), size: 30, pizzaType: 2 },
    //         { productId: pizza1.id, price: randomNumber(290, 600), size: 40, pizzaType: 2 },
    //     ],
    // });

    await prisma.productItem.createMany({
        data: [
            // Пицца "Пепперони фреш"
            { productId: pizza1.id, price: randomNumber(290, 600), pizzaType: 1, size: 20 },
            { productId: pizza1.id, price: randomNumber(290, 600), pizzaType: 2, size: 30 },
            { productId: pizza1.id, price: randomNumber(290, 600), pizzaType: 2, size: 40 },

            // Пицца "Сырная"
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 1, size: 20 },
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 1, size: 30 },
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 1, size: 40 },
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 2, size: 20 },
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 2, size: 30 },
            { productId: pizza2.id, price: randomNumber(290, 600), pizzaType: 2, size: 40 },

            // Пицца "Чоризо фреш"
            { productId: pizza3.id, price: randomNumber(290, 600), pizzaType: 1, size: 20 },
            { productId: pizza3.id, price: randomNumber(290, 600), pizzaType: 2, size: 30 },
            { productId: pizza3.id, price: randomNumber(290, 600), pizzaType: 2, size: 40 },

            // Остальные продукты
            { productId: 1, price: randomNumber(290, 600) },
            { productId: 2, price: randomNumber(290, 600) },
            { productId: 3, price: randomNumber(290, 600) },
            { productId: 4, price: randomNumber(290, 600) },
            { productId: 5, price: randomNumber(290, 600) },
            { productId: 6, price: randomNumber(290, 600) },
            { productId: 7, price: randomNumber(290, 600) },
            { productId: 8, price: randomNumber(290, 600) },
            { productId: 9, price: randomNumber(290, 600) },
            { productId: 10, price: randomNumber(290, 600) },
            { productId: 11, price: randomNumber(290, 600) },
            { productId: 12, price: randomNumber(290, 600) },
            { productId: 13, price: randomNumber(290, 600) },
            { productId: 14, price: randomNumber(290, 600) },
            { productId: 15, price: randomNumber(290, 600) },
            { productId: 16, price: randomNumber(290, 600) },
            { productId: 17, price: randomNumber(290, 600) },
        ],
    });

    await prisma.cart.createMany({
        data: [
            { userId: 1, totalAmount: 0, token: '12345' },
            {
                userId: 2,
                totalAmount: 0,
                token: '67890',
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [
                    {
                        id: 1,
                    },
                    {
                        id: 2,
                    },
                    {
                        id: 3,
                    },
                    {
                        id: 4,
                    },
                ],
            },
        },
    });
};

// удаление данных
const down = async () => {
    // await prisma.user.deleteMany({}); // автоинкремент не удаляет
    // SQL запрос:
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
};

const main = async () => {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
};

// main().then(async () => {
//     await prisma.$disconnect().catch(async (e) => {
//         console.log(e);
//         await prisma.$connect();
//         process.exit(1);
//     });
// });

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
