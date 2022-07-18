export const LocalStorageFavoritos = (id : any) => {

    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter((pokemon : any) => {
            //console.log('pokemon', pokemon);

            return pokemon !== id
        });
    } else {
        favoritos.push(id);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

}

export const existFvoritos = (id : number) => {

    if (typeof window === 'undefined') {
        return false;
    }

    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    return favoritos.includes(id);

}

export const pokemonsFavoritos = () : number[] => {
    return JSON.parse(localStorage.getItem('favoritos') || '[]');
}
