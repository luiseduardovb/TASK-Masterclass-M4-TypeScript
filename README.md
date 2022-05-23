# TypeScript 101

Let's learn some TypeScript!

## Interfaces

1. Go to `src/interfaces.ts`, we have some functions to complete.
2. You will notice that the interfaces are incomplete, so we must go to `models/people.ts` and complete those interfaces too.
3. Type in the `Person` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
4. Complete the function for `showPerson` and behold the magic of auto-completion!
5. Verify your script works by running `npm start`.
6. Type in the `Employee` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
   - **company**: `string`
   - **position**: `string`
7. Verify your script works by running `npm start`.
8. Type in the `Manager` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
   - **company**: `string`
   - **position**: `string`
   - **level**: `number`

### Interfaces Bonus

Do not re-type the common field for `Employee` and `Manager`, instead:

1. Have `Employee` "extend" `Person`.
1. Have `Manager` "extend" `Employee`.

## Interfaces Spicy Bonus

- Experiment inlining the interfaces in `src/interfaces.ts` instead of having them imported elsewhere.
- Try using `intersections` instead of `extending`.
