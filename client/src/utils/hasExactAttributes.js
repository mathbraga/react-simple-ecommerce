const hasExactAttributes = (currentItem, newItem) => {
    const attributes = Object.keys(newItem.selectedAttributes);
    const hasExactAttributes = attributes.every(
        attribute => {
            const current = currentItem.selectedAttributes[attribute];
            const newAttr = newItem.selectedAttributes[attribute];
            
            return current === newAttr;
    })

    return hasExactAttributes;
}

export default hasExactAttributes;
