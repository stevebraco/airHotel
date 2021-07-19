export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number / 100)
}

// Nous évite de faire un map sur plusieurs data
export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    // console.log(unique);
    // before unique.flat() output ["all", Array(3), Array(2), Array(2), Array(3), Array(1), Array(3), Array(2), Array(2), Array(2), Array(3), Array(2), Array(3), Array(1), Array(1), Array(1), Array(2), Array(1), Array(2), Array(1), Array(2), Array(1), Array(2), Array(2)]
     if(type === 'colors') {
   unique = unique.flat() // output ["all", "#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"]
     }
    return ['all', ...new Set(unique)]
}
