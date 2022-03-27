const handleJSON = (data: any) => {
  const result = {}

  const addKeyValue = (key: string, value: string, obj: any) => {
    const isLeafElement = !key.includes(".")
    if (isLeafElement) {
      obj[key] = value
    } else {
      const [topLevelKey, ...childs] = key.split(".")
      if (!obj[topLevelKey]) {
        obj[topLevelKey] = {}
      }
      addKeyValue(childs.join("."), value, obj[topLevelKey])
    }
  }

  for (const keyName in data) {
    addKeyValue(keyName, data[keyName], result)
  }

  return result
}

export { handleJSON }
