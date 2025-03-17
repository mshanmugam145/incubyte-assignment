# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Basic Cases
✅ Empty string should return 0
""  → 0

✅ Single number should return the number itself
"1" → 1

✅ Two numbers, separated by a comma, should return their sum
"1,2" → 3

## Handle Unknown Amount of Numbers
✅ More than two numbers should also return the sum
"1,2,3,4,5" → 15

## Handle New Lines (\n) as Delimiters
✅ Mixing , and \n as valid separators
"1\n2,3" → 6

✅ Invalid case: Consecutive comma & newline should not be supported
"1,\n" → ❌ (Invalid input)

## Support Custom Delimiters
✅ Using a single-character delimiter
"//;\n1;2" → 3

✅ Using a multi-character delimiter
"//[***]\n1***2***3" → 6

✅ Using multiple single-character delimiters
"//[*][%]\n1*2%3" → 6

✅ Using multiple multi-character delimiters
"//[***][%%%]\n1***2%%%3" → 6

## Handle Negative Numbers (Throw Exception)
✅ Single negative number should throw an exception
"1,-2,3" → ❌ Exception: "negatives not allowed: -2"

✅ Multiple negative numbers should list all of them
"1,-2,-3,4" → ❌ Exception: "negatives not allowed: -2, -3"

## Ignore Numbers Greater Than 1000
✅ Numbers greater than 1000 should be ignored
"2,1001" → 2

✅ Numbers exactly 1000 should be included
"2,1000" → 1002

## Handling Complex Cases Together
✅ Multiple delimiters & newlines
"//[*][%]\n1*2%3\n4,5" → 15

✅ Multi-character delimiters & ignoring large numbers
"//[***][%%%]\n1***2%%%1001***3" → 6

✅ Negative numbers & multi-character delimiters
"//[###]\n1###-2###3" → ❌ Exception: "negatives not allowed: -2"
