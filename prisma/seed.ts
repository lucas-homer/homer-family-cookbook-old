import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany({});
  await prisma.mealType.deleteMany({});
  await prisma.ingredient.deleteMany({});
  await prisma.recipe.deleteMany({});
  console.log("Deleted old seed data");

  // User
  const lucas = await prisma.user.upsert({
    where: { email: "lucas.homer@gmail.com" },
    update: {},
    create: {
      email: "lucas.homer@gmail.com",
      firstName: "Lucas",
      lastName: "Homer",
      role: "ADMIN",
    },
  });
  console.log(`Created User: ${lucas.firstName}, Role: ${lucas.role}`);

  // MealType
  const mealTypeNames = [
    "appetizer",
    "beverage",
    "bread",
    "breakfast",
    "cake",
    "candy",
    "dessert",
    "entree",
    "preserve",
    "sauce",
    "side",
    "salad",
  ];
  let mealTypeId = 1;
  const mealTypes = await prisma.mealType.createMany({
    data: mealTypeNames.map((mealType) => {
      const _mealTypeId = mealTypeId;
      mealTypeId++;
      return {
        id: _mealTypeId,
        name: mealType,
      };
    }),
  });
  console.log(`Created ${mealTypes.count} MealTypes`);

  const breakfast = await prisma.mealType.findFirst({
    where: { name: "breakfast" },
  });
  const side = await prisma.mealType.findFirst({
    where: { name: "side" },
  });

  // Recipe
  const omelette = await prisma.recipe.create({
    data: {
      id: 1,
      title: "Omelette du fromage",
      authorId: lucas.id,
      servings: "One",
      instructions:
        "Whisk eggs, add a smidge of water, pinch salt, and heat skillet on medium-high. Melt knob of butter in skillet, then cook egg mixture in pan, teasing the sides and stuff you know? Youtube it. As the bottom layer of egg sets, sprinkle cheese on top and let melt a moment. Tease and fold the left third of the omelette over onto the middle third, then fold that over onto the right third of the omelette. Serve with fresh cracked black pepper.",
      mealTypes: {
        connect: {
          id: breakfast?.id,
        },
      },
      ingredients: {
        createMany: {
          data: [
            {
              description: "eggs, whisked",
              quantity: 2,
            },
            {
              description: "eighth cup shredded cheese",
              quantity: 1,
            },
          ],
        },
      },
    },
  });

  const instantPotBeans = await prisma.recipe.create({
    data: {
      id: 2,
      title: "Instant-pot beans",
      authorId: lucas.id,
      instructions:
        "After sorting out the gross wrinkled or broken beans, rinse the beans and put in a pot of water filled two inches higher than the beans. Add chipotle pepper, garlic, and bouillon paste to water and stir to combine. Set Instant Pot to high pressure for 35 minutes. Let pressure release naturally, probably 15 or 20 minutes.",

      mealTypes: {
        connect: {
          id: side?.id,
        },
      },
      servings: "4 to 6",
      ingredients: {
        createMany: {
          data: [
            {
              description: "pound dry pinto or black beans",
              quantity: 1,
            },
            {
              description: "cloves garlic, minced",
              quantity: 3,
            },
            {
              description: "chipotle pepper in adobo, minced",
              quantity: 1,
            },
            {
              description: "tablespoon Better Than Bouillon paste",
              quantity: 1,
            },
          ],
        },
      },
    },
  });

  console.log("omelette", omelette);
  console.log("beans", instantPotBeans);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
