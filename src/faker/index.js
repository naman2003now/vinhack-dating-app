import { faker } from "@faker-js/faker";
export function createUser() {
  return {
    image: `${faker.image.fashion(1000, 2000)}?random=${Date.now()}`,
    name: faker.name.fullName(),
    location: faker.address.city() + ", " + faker.address.country(),
    bio: "Now taking applications for a boyfriend. Must be certified in cuddling and telling me I’m pretty. Swipe right to inquire within.",
  };
}
