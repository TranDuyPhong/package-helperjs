# HelperJS by WindSn
**HelperJS package make programming is in JS faster, better and convenient** :smile:  
Source code: [https://github.com/TranDuyPhong/HelperJS](https://github.com/TranDuyPhong/HelperJS)  
### Modules in HelperJS
##### Common
    1. Primitive
        1.1 Common
            Methods
                HandlePrimitiveValue
                HandlePrimitiveArray
                HandlePrimtiveObject
        1.2 ArrayObject
            Methods
                ClonePrimitiveArrayObject
        1.3 Object
            Methods
                ClonePrimitiveObject        
    2. UI
        2.1 Global
            Methods CallLazyLoadData
        2.2 Input
            Methods SearchDelayData    
    3. Ascii  
        Methods
            ASCIIUp
            ASCIILw
    4. Data
        Methods  
            GetCachingData
            SetCachingData
            MapFormToModelData
            MapFormToModelDataWithFile
			MapFormToModelDataOnlyFile
    5. Url
        Methods
            MapModelToUrl
    6. Validate
        Methods
            HasValue
            TryParseValue    
    7. Global
        Methods
            FormatUnsignedToAccented           
##### React
    1. Redux
        1.1 Dispatch
            Methods  
                CombineDispatchToProps
        1.2 State        
            Methods
                CombineStateToProps

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