const formatAsCurrency = (value) => {
    if (typeof value !== 'number' || isNaN(value)) {
        return '--';
    }

    return value.toLocaleString(
        'es-ES',
        {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
}

export { formatAsCurrency };