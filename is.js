
    const num= value => typeof value === 'number'
    const nan= value => Number.isNaN(value)
    const str= value => typeof value === 'string'
    const bool= value => typeof value === 'boolean'
    const undef= value => typeof value === 'undefined'
    const def= value => typeof value !== 'undefined'
    const arr= value => Array.isArray(value)
    const obj= value => typeof value === 'object' && value !== null
    const fun= value => typeof value === 'function'
    const truthy= value => Boolean(value)
    const falsy= value => !Boolean(value)
 