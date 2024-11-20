import qs from "query-string";

export const formUrlQuery = ({
    params,
    key,
    value,
}: {
    params: URLSearchParams;
    key: string;
    value: string;
}) => {
    const queryString = qs.parse(params.toString());
    queryString[key] = value;

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
    });
};

export const removeKeysFromUrl = ({
    params,
    keys,
}: {
    params: URLSearchParams;
    keys: string[];
}) => {
    const queryString = qs.parse(params.toString());

    keys.forEach((key) => {
        delete queryString[key];
    });

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: queryString,
        },
        { skipNull: true },
    );
};
