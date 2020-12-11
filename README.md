# dec-to-binary

dec-to-binary is a simple nodejs package to convert decimal to binary easily.

## Installation

```bash
npm i dec-to-binary --save
```

## Usage
Convert decimal to binary with just one line of code
- Convert every decimal number into binary easily with this amazing decimal converter. For one of my project, I had to create a tool to convert decimal to binary so, I used Bignumber.js and created one here.
- Use this package to convert decimal numbers. Just install the package, import it and use it anywhere on your code, it will work fine.
- You can use this in your automation projects where just decimal numbers are used. You can get the input from the user in decimal numbers and then covert it into binary for safety purposes with this tool.

Note:

- Without Bignumber.js, I did not get a correct answer for the numbers with more then 16 characters. For that reason, I have used Bignumber.js in this package.

Decimal to Binary conversion:
```python
var decimal = require('dec-to-binary')

console.log(decimal.decimal("10"));
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
