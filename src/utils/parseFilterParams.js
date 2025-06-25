const parseIsFavourite = (isFavourite) => {

    if (typeof isFavourite !== 'string') return undefined;
    if (isFavourite === 'true') return true;
    if (isFavourite === 'false') return false;
    return undefined;
};


const parseContactType = (contactType) => {

    const isString = typeof contactType === 'string';
    if (!isString) return;

    const allowedTypes = ['work', 'home', 'personal'];

   if (allowedTypes.includes(contactType)) {
    return contactType;
  }
};

export const parseFilterParams = (query) => {
    const { isFavourite, contactType } = query;
    const parsedIsFavourite = parseIsFavourite(isFavourite);
    const parsedContactType = parseContactType(contactType);
    
    return {
        isFavourite: parsedIsFavourite,
        contactType: parsedContactType,
    };
};
