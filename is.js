
    num= (value) => typeof value === 'number'
    nan= (value) => Number.isNaN(value)
    str= (value) => typeof value === 'string'
    bool= (value) => typeof value === 'boolean'
    undef= (value) => typeof value === 'undefined'
    def= (value) => typeof value !== 'undefined'
    arr= (value) => Array.isArray(value)
    obj= (value) => typeof value === 'object' && value !== null
    fun= (value) => typeof value === 'function'
    truthy= (value) => Boolean(value)
    falsy=(value) => !value
  
 