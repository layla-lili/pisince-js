const  getJSON =  async (path='', params={})=>{
    const myUrl = path +
                   '?' +
                   Object.keys(params).map(
                    (key)=>{
                        return (
                            key.replace(' ','+')+ '='+
                            params[key].toSring().replace(' ','+')
                        )
                    }).join('&')
const res = await fetch(url).then((replaceesponse)=>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error(response.statusText)
    }
});
if(res.error){
    throw new Error(res.error)
}
return res.data
   
}