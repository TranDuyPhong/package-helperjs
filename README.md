# HelperJS by WindSn
**HelperJS package make programming is in JS faster, better and convenient** :smile:
Source code: 
### Modules in HelperJS
##### Common
    1. Ascii
        __Methods__
        * ASCIIUp
        * ASCIILw
    2. Object
        __Methods__
        * ClonePrimitiveObject
    3. ArrayObject
        __Methods__
        * ClonePrimitiveArrayObject
##### Separation
    1. Material-UI
        1.1. Select
            __Methods__
            * MappingSelect
### Usage
There are 2 ways you can use it
1. Import from @windsn/helperjs
```const HelperJS = require('@windsn/helperjs'));```
or
```const { ASCIIUp } require('@windsn/helperjs');```
```console.log(HelperJS.ASCIIUp[0]); -> A```
2. Import each module
```const Common = require('@windsn/helperjs/common');```
or
```const { ASCIIUp } require('@windsn/helperjs/common');```
```console.log(Common.ASCIIUp[0]); -> A```
[^1]: Fast, Better, Convenient