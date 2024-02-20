const fetchFilmsGender = () => ({
    type: 'FETCH_FILMS_GENDER'
});

const fetchFilmsGenderSuccess = () => ({
    type: 'FETCH_FILMS_GENDER_SUCCESS',
    genders,
});

const fetchFilmsGenderError = () => ({
    type: 'FETCH_FILMS_GENDER_ERROR',
    error,
});

export {
    fetchFilmsGender,
    fetchFilmsGenderSuccess,
    fetchFilmsGenderError,
}