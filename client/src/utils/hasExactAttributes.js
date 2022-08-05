const hasExactAttributes = (currentItem, newItem) => {
    const currItemSelections = JSON.stringify(currentItem.selectedAttributes);
    const newItemSelections = JSON.stringify(newItem.selectedAttributes);

    return currItemSelections === newItemSelections;
}

export default hasExactAttributes;
