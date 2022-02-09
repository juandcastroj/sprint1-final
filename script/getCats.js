
const getCats = async (url) =>{

    const res = await fetch(url)
    const data2 = await res.json()

   return data2
}

export default getCats