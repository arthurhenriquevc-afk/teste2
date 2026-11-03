export const local = (path = '') => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export const anchor = (id: string) => `${import.meta.env.BASE_URL}#${id}`;
