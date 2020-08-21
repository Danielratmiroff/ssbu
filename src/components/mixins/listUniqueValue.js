export const listUniqueValue = (base, key) => {

    const unique = base.reduce((acc, current) => {
        const x = acc.find(item => item[key] === current[key]); 
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
    
    return unique
}