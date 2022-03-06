import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
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

  console.log(`Created user: ${lucas.firstName}, role: ${lucas.role}`);

  const recipes = await prisma.recipe.createMany({
    data: [
      {
        id: 1,
        title: "Omelette du fromage",
        authorId: lucas.id,
        instructions:
          "Whisk eggs, add a smidge of water, pinch salt, and heat skillet on medium-high. Add knob of butter to skillet, then cook egg mixture in pan, teasing the sides and stuff. When eggs start to set, sprinkle cheese on top and let melt a moment. Then, fold outer portions over to create rectangular omelette. Serve.",
      },
      {
        id: 2,
        title: "Hard-boiled egg",
        authorId: lucas.id,
        instructions:
          "Place eggs in medium pot and fill pot with water until an inch between surface and eggs. Cover pot, heat on high until reaching a boil, at which point turn off heat and wait 12 minutes. Drain and rinse with cold water. Peel and enjoy.",
      },
    ],
  });
  console.log(`Created ${recipes.count} recipes`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
