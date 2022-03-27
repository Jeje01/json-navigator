const handleJSON = (data: Object) => {
  const result = {}
  //address.geo.lat 있을 경우 lng 새로 만들지 않음
  for (const name in data) {
    if (name.includes(".")) {
      const [key, ...rest] = name.split(".")
      const restName = rest.join(".")
      if (restName.includes(".")) {
        const [a, b] = restName.split(".")
        const obj1 = {}
        const obj2 = {}
        // @ts-ignore
        obj2[b] = data[name]
        // @ts-ignore
        obj1[a] = obj2
        // @ts-ignore
        result[key] = obj1
        
      } else {
        const obj = {}
        // @ts-ignore
        obj[restName] = data[name]
        // @ts-ignore
        result[key] = obj
      }
    } else {
      // @ts-ignore
      result[name] = data[name]
    }
  }
  return result
}

export { handleJSON }
