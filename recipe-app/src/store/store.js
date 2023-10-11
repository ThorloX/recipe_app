
import { defineStore } from 'pinia';

export const useStore = defineStore('recipes', {
state: () => ({
  recipes: [
    {
      slug: "Pancakes",
      title: "Pancakes",
      description: "Pancakes are a popular breakfast food made from a batter consisting of flour, eggs, milk, and butter. They are typically served with syrup, butter, and/or fruit.",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "2 teaspoons baking powder",
        "1/2 teaspoon salt",
        "1 cup milk",
        "1 egg",
        "2 tablespoons vegetable oil"
      ],
      method: [
        "In a medium bowl, whisk together the flour, sugar, baking powder, and salt.",
        "In another bowl, whisk together the milk, egg, and oil.",
        "Add the wet ingredients to the dry ingredients and whisk until just combined.",
        "Heat a non-stick pan over medium heat.",
        "Pour 1/4 cup of batter onto the pan for each pancake.",
        "Cook until bubbles form on the surface of the pancake, then flip and cook until golden brown on the other side.",
        "Serve with syrup, butter, and/or fruit."
      ]
    },
    {
      slug: "American-Brownie",
      title: "American-Brownie",
      description: "Brownies are chocolaty baked products made in square or rectangle shapes. They are commonly consumed around the world and are made with flour, fat (oil or butter), sugar, eggs and chocolate (molten or cocoa powder).",
      ingredients: [
        "3 dl suger",
        "4 tablespoon cocoa powder",
        "1 teaspoon vanila suger",
        "1 pinch salt",
        "150g butter",
        "2 egg"
      ],
      method: [
        "Mix the dry stuff in a bowl",
        "melt the butter",
        "mix the butter in the bowl once its cooled down",
        "pour into a shape, and cook in the oven, over and under heat, 165 degrees for 25-30 minutes"
      ]
    },
          {
        slug: "Mac-and-Cheese",
        title: "Mac-and-Cheese",
        description: "Mac and cheese is a rich and creamy dish consisting of macaroni pasta mixed with a cheesy sauce. It's particularly popular in the United States.",
        ingredients: [
          "115g butter",
          "2 tablespoon flour",
          "0,7dl milk",
          "3 tablespoon paprika powder",
          "2 teaspoon salt",
          "2 teaspoon pepper",
          "desired amount of graded cheese",
          "300ish G of macaroni"
        ],
        method: [
          "melt butter in the pan",
          "add 2 tablespoon flour and stur",
          "add 0,7dl milk, 2 ts salt/pepper, and 3tb paprika pwoder, and stur til it thickens",
          "cook up some macaroni, 300g should do the trick",
          "add desired amount of graded cheese",
          "once its thickened, and desired thickness is reached, add the macaroni",
          "stur til all the macaroni is nicely coated and the sauce is thick",
          "add the mix to a ovenproof dish and grill at 200 degrees til the layer ontop is nice and golden brown"

        ]
      },
  ]
}),
});